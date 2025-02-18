import React from 'react';
import { ScrollingAnimatedImageConvergence } from '@/components';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StickyContainer = styled.div`
  position: sticky;
  top: 78px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const ExtraSpace = styled.div`
  height: 300vh;
`;

export const ConvergenceAnimationSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ConvergenceAnimationSection {
      secondaryImages: allFile(filter: {name: {regex: "/-convergence-animation$/"}}) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 250)
          }
        }
      }
      mainImage: allFile(filter: {name: {regex: "/-home-convergence-animation$/"}}) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 640)
          }
        }
      }
    }  
  `);

  const mainImageData = data.mainImage.nodes[0];
  const secondaryImages = data.secondaryImages.nodes;

  return(
    <section>
      <StickyContainer>
        <ScrollingAnimatedImageConvergence
          mainImageSrc={mainImageData}
          secondaryImagesSrc={secondaryImages}  
        />
      </StickyContainer>
      <ExtraSpace />
    </section>
  );
}