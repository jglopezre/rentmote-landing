import React, { useRef } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { motion, useInView, Variants } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '@/styles';
import { useScreenClass } from 'react-grid-system';

type SimpleTextWithPictureProps = {
  text: string,
  imageSrc: any;
};

// styles
const Wrapper = styled(motion.div)<{ $breakpoint: string }>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  row-gap: 64px;
  margin: 0 ${(props) => props.$breakpoint == 'xs' || props.$breakpoint == 'md' ? '0' : '3rem'};
`;

const StyledTextContainer = styled(motion.div)`
  word-wrap: break-word;
  align-self: center;
  flex-basis: 60%;
  & p {
    font-size: ${({ theme }) => theme.typography.fontSize.s4};
    line-height: 2rem;
  }
`;

// Animations

const containerVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const itemVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}


export const SimpleTextWithPicture: React.FC<SimpleTextWithPictureProps> = ({ text, imageSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const breakpoint = useScreenClass();

  const image = getImage(imageSrc);
  return (
    <Wrapper
      ref={containerRef}
      variants={containerVariants}
      initial="offscreen"
      animate={isInView ? 'onscreen' : 'offscreen'}
      $breakpoint={breakpoint}
    >
      <StyledTextContainer variants={itemVariants}>
        <p><q>{text}</q></p>
      </StyledTextContainer>
      <motion.div variants={itemVariants}>
        {
          image
          ? (
              <GatsbyImage
                image={image}
                alt={imageSrc.name}
                style={{
                  borderRadius: theme.border.radius.base
                }}

              />
          )
          : null
        }
      </motion.div>
    </Wrapper>
  )
}