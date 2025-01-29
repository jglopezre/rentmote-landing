import { AnimatedAutoCarousel } from '@/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';

export const LogotipoAnimatedCarouselSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query LogotipoAnimatedCarousel {
      allFile(
        filter: {name: {regex: "/-top-carousel$/"}, extension: {regex: "/(png|webp)/"}}
      ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              height: 100
              transformOptions: { duotone: { highlight: "#ffffff", shadow: "#031F40" } }
            )
          }
        }
      }
    }  
  `);

  const breakpoint = useScreenClass();

  return (
    <Container component="section">
      <Row>
        <Col xs={12}>
          {
            breakpoint === 'xs' || breakpoint === 'md' && data.allFile.nodes.length > 5
            ? null
            : <AnimatedAutoCarousel nodes={data.allFile.nodes} />
          }
        </Col>
      </Row>
    </Container>
  );
}