import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { theme } from '@/styles';
import styled from 'styled-components';

type ScrollingAnimatedImageConvergenceProps = {
  mainImageSrc: any,
  secondaryImagesSrc: any[]
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollingAnimatedImageConvergence: React.FC<ScrollingAnimatedImageConvergenceProps> = ({ mainImageSrc, secondaryImagesSrc }) => {
  const { scrollYProgress } = useScroll();

  const mainImage = getImage(mainImageSrc);

  const getRandomPosition = (min: number, max: number) => {
    const getRandomNonZero = () => {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 3) - 1; // Genera un número entre -1 y 1
      } while (randomNumber === 0); // Repite si el número es 0
      return randomNumber;
    };
    
    const result = (Math.floor(Math.random() * (max - min + 1)) + min)
    
    return result * 100 * getRandomNonZero();
  }
  
  const secondaryImages = secondaryImagesSrc.map((imageSrc) => {
    const image = getImage(imageSrc);
    if (!image) return null;

    const initialX = getRandomPosition((1 * window.innerWidth / 1000), (3 * window.innerWidth / 1000));
    const initialY = getRandomPosition(1, 3);

    const x = useTransform(scrollYProgress, [0, 1], [`${initialX}`, '0px']);
    const y = useTransform(scrollYProgress, [0, 1], [`${initialY}`, '0px']);

    return (
      <motion.div
        key={imageSrc.id}
        style={{
          position: "absolute",
          x,
          y,
        }}
      >
        <GatsbyImage
          image={image}
          alt={image.name}
          style={{
            borderRadius: theme.border.radius.base,
          }}
        />
      </motion.div>
    )}
  );
  

  return (
    <Wrapper>
      <div
        style={{
          zIndex: '1',
        }}
      >
        {
          mainImage && (
            <GatsbyImage
              image={mainImage}
              alt={mainImage.name}
              style={{
                borderRadius: theme.border.radius.base,
                borderStyle: 'solid',
                borderWidth: theme.border.width.sm,
                borderColor: theme.colors.primary1,
                boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
              }}
            />
          )
        }
      </div>
      {secondaryImages}
    </Wrapper>
  )
}