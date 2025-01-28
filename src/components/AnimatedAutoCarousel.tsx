import React, { useEffect, useRef, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  height: 7rem;
  overflow-x: hidden;
`;

const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  height: 100%;
`;

type LogoPosition = {
  x: number;
  hidden: boolean;
};

type AnimatedAutoCarouselProps = {
  nodes: any[];
};

export const AnimatedAutoCarousel: React.FC<AnimatedAutoCarouselProps> = ({ nodes }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);
  const positionsRef = useRef<LogoPosition[]>([]);
  const animationRef = useRef<number | null>(null);
  const generalWidth = useRef<{container: number, image: number}>({container: 0, image: 0});

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const logoWidth = containerWidth / nodes.length;
      const overContainerWidth = containerWidth + logoWidth;
      const finalLogoWidth = overContainerWidth / nodes.length;
      
      generalWidth.current = {
        image: finalLogoWidth,
        container: containerWidth,
      };

      positionsRef.current = nodes.map((_, index) => ({
        x: index * finalLogoWidth,
        hidden: false,
      }));
    }
  }, [nodes]);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;

      const moveSpeed = 1;

      positionsRef.current = positionsRef.current.map((pos) => {
        let newX = pos.x - moveSpeed;
        let hidden = pos.hidden;

        if (newX + generalWidth.current.image <= 0) {
          hidden = true;
          newX = generalWidth.current.container + 30;
        } else if (hidden && newX >= generalWidth.current.container) {
          hidden = false;
        }

        return { x: newX, hidden };
      });

      // Actualiza las posiciones en el DOM directamente
      logosRef.current.forEach((logo, index) => {
        if (logo) {
          const position = positionsRef.current[index];
          logo.style.transform = `translateX(${position.x}px)`;
          logo.style.visibility = position.hidden ? 'hidden' : 'visible';
        }
      });

      animationRef.current = requestAnimationFrame(updatePositions);
    };

    animationRef.current = requestAnimationFrame(updatePositions);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [nodes]);

  return (
    <CarouselContainer ref={containerRef}>
      <CarouselRow>
        {nodes.map((node, index) => {
          const gatsbyImage = getImage(node.childImageSharp);
          return gatsbyImage ? (
            <div
              key={node.id}
              ref={(el) => (logosRef.current[index] = el)}
              style={{
                position: 'absolute',
                transition: 'transform 0s visibility 0s',
              }}
            >
              <GatsbyImage image={gatsbyImage} alt={`Logo ${node.name}`}  />
            </div>
          ) : null;
        })}
      </CarouselRow>
    </CarouselContainer>
  );
};



/* import React, { useEffect, useRef, useState } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  height: 6rem;
  overflow-x: hidden;
`;

const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  will-change: transform;
  position: relative;
  height: 100%;
`;

const LogoImage = styled.img`
  height: 5rem;
  width: auto;
  object-fit: contain;
  margin-right: 1rem;
  position: absolute;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  transition: transform 0.1s linear, visibility 0s linear 0.1s;
  border:solid 1px red;
`;

type LogoPosition = {
  x: number,
  hidden: boolean,
}

type AnimatedAutoCarouselProps = {
  nodes: any[]
}


export const AnimatedAutoCarousel: React.FC<AnimatedAutoCarouselProps> = ({ nodes }) => {
  const [logoPositions, setLogoPositions] = useState<LogoPosition[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    console.log(`Ancho de pantalla = ${window.innerWidth}`);
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const logoWidth = containerWidth / nodes.length;
      const overContainerWidth = containerWidth + logoWidth;
      const finalLogoWidth = (overContainerWidth / nodes.length) + 30;

      const initialPositions = nodes.map((_: any, index: number) => ({
        x: index * finalLogoWidth,
        hidden: false,
      }));

      setLogoPositions(initialPositions);
    }
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      setLogoPositions((prevPositions) => {
        if (!containerRef.current) return prevPositions;

        const containerWidth = containerRef.current.offsetWidth;
        const logoWidth = containerWidth / nodes.length;
        const overContainerWidth = containerWidth + logoWidth;
        const finalLogoWidth = (overContainerWidth / nodes.length) + 30;
        const moveSpeed = 0.5;

        const adjustedPositions = prevPositions.map((pos) => {
          let newX = pos.x - moveSpeed;
          let hidden = pos.hidden;

          if (newX + finalLogoWidth <= 0) {
            hidden = true;
            newX = containerWidth + finalLogoWidth;
          } else if (hidden && newX > 0) {
            hidden = false;
          }

          return {
            x: newX,
            hidden,
          };
        });

        // Ensure no gaps by adjusting positions if necessary
        adjustedPositions.forEach((pos, index) => {
          const nextIndex = (index + 1) % adjustedPositions.length;
          const nextPos = adjustedPositions[nextIndex];

          if (pos.x + finalLogoWidth < nextPos.x) {
            adjustedPositions[nextIndex].x = pos.x + finalLogoWidth;
          }
        });

        return adjustedPositions;
      });

      animationRef.current = requestAnimationFrame(updatePositions);
    };

    animationRef.current = requestAnimationFrame(updatePositions);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <CarouselContainer ref={containerRef}>
      <CarouselRow>
        {
          nodes.map((node, index) => {
            const gatsbyImage = getImage(node.childImagesharp);
            return (
              gatsbyImage
              ? (
                  <GatsbyImage
                    key={node.id}
                    image={gatsbyImage}
                    alt={`Logo ${node.name}`}
                    hidden={logoPositions[index]?.hidden}
                    style={{
                      transform: `translateX(${logoPositions[index]?.x || 0}px)`,
                    }}
                  />
              )
              : null
            )
          })
        }
      </CarouselRow>
    </CarouselContainer>
  );
};
 */

/*
const logos = [
  '/images/rentmote-logotipo-black.png',
  '/images/rentmote-logotipo-white.png',
  '/images/rentmote-logotipo-black.png',
  '/images/rentmote-logotipo-white.png',
  '/images/rentmote-logotipo-black.png',
];


*/
/*
<CarouselWrapper component="section">
      <Row>
        <Col>
          <CarouselContainer ref={containerRef}>
            <CarouselRow>
              {logos.map((logo, index) => (
                <LogoImage
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  hidden={logoPositions[index]?.hidden}
                  style={{
                    transform: `translateX(${logoPositions[index]?.x || 0}px)`,
                  }}
                />
              ))}
            </CarouselRow>
          </CarouselContainer>
        </Col>
      </Row>
    </CarouselWrapper>
*/