import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { theme } from '@/styles';

const PictureWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
`;

const INTERVAL_DELAY = 4000;

export const AnimatedPicturePresenter: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AnimatedPicturePresenter {
      allFile(filter: {name: {regex: "/-screenshot-experience$/"}}) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, height: 480, aspectRatio: 1.4)
          }
        }
      }
    }
  `);
  const gatsbyImages = data.allFile.nodes;

  const [gImage, cycleImage] = useCycle(...gatsbyImages);

  const imageSrc = getImage(gImage);

  useEffect(() => {
    const interval = setInterval(() => {
        cycleImage()
      },
      INTERVAL_DELAY
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <PictureWrapper
      key={gImage.id}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
    >
      <GatsbyImage
        image={imageSrc!!}
        alt={gImage.name}
        style={{
          borderRadius: theme.border.radius.lg,
        }}
      />
    </PictureWrapper>
  )
}