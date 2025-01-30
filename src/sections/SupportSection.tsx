import React, { forwardRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row, RowProps, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { Variants, motion } from 'framer-motion'
import { MiniCard } from '@/components';
import { useUserLanguage } from '@/customHooks';

// Styled Components
const StyledSectionWrapper = styled(Container)`
  margin-bottom: 8rem;
`;

const StyledTextCol = styled(Col)`
  color: ${({ theme }) => theme.colors.primary1};
  text-align: center;
  padding-bottom: 4rem;
  padding-top: 4rem;
  & div {
    display: inline-block;
    width: 100%;
    max-width: 800px;
    & h1 {
      font-weight: 300;
      font-size: ${({ theme }) => theme.typography.fontSize.s1};
    }
    & p {
      max-width: inherit;
      word-wrap: break-word;
      font-size: ${({ theme }) => theme.typography.fontSize.s5};
    }
  }
`;

const CardsRow = styled(motion.div)<{$breakpoint: string}>`
  background: linear-gradient(${({ theme }) => theme.colors.light2}, ${({ theme }) => theme.colors.light} );
  padding-top: 3rem;
  border-radius: ${({ theme }) => theme.border.radius.base};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

const CardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Motion properties for animation
const cardVariants: Variants = {
  offscreen: {
    y: -70,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  }
};

const containerVariants: Variants = {
  offscreen: { opacity: 1 },
  onscreen: {
    transition: {
      staggerChildren: 0.5,
      type: 'spring', // Tipo de transición
      stiffness: 100, // Rigidez del resorte
      damping: 20, // Amortiguación
      delay: 0.2, // Retraso inicial
    }
  }
};



export const SupportSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SupportSection {
      allJsonJson {
        nodes {
          en {
            supportSection {
              description
              title
              cards {
                image
                title
              }
            }
          }
          es {
            supportSection {
              cards {
                image
                title
              }
              description
              title
            }
          }
        }
      }
      allFile(filter: {name: {regex: "/-support$/"}}) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 360, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const breakpoint = useScreenClass();

  const userLanguage = useUserLanguage();

  const images = data.allFile.nodes;
  
  const texts = userLanguage === 'es' ?  data.allJsonJson.nodes[0]['es'].supportSection : data.allJsonJson.nodes[0]['en'].supportSection
  const cards: any[] = texts.cards
  return(
    <StyledSectionWrapper component="section">
      <Row>
        <StyledTextCol xs={12}>
          <div>
            <h1>{texts.title}</h1>
            <p>{texts.description}</p>
          </div>
        </StyledTextCol>
      </Row>
      
      <CardsRow
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        $breakpoint={breakpoint}
      >
        {
          cards.map((card) => {
            const gatsbyImage = images.find((image: any) => image.name === card.image)
            return (
              <CardContainer
                key={gatsbyImage.id}
                variants={cardVariants}
              >
                <MiniCard
                  title={card.title}
                  description={card.description}
                  imageSrc={gatsbyImage}
                />
              </CardContainer>
            )
          })
        }
      </CardsRow>
    </StyledSectionWrapper>
  )
}