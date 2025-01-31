import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { ScrollingAnimatedImageConvergence } from '@/components';
import { graphql, useStaticQuery } from 'gatsby';

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
    <Container fluid style={{
      height: '100vh',
      scrollSnapAlign: 'start',
    }}>
      <Row>
        <Col>
          <ScrollingAnimatedImageConvergence
            mainImageSrc={mainImageData}
            secondaryImagesSrc={secondaryImages}  
          />
        </Col>
      </Row>
    </Container>
  );
}