import { AnimatedAutoCarousel } from '@/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Container)`
  position: relative;
  &::before {
    content: '';
    display: box;
    position: absolute;
    width: 200%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary1};
    top: 0;
    left: -50%;
  }
`;

export const BottomAnimatedCarousel: React.FC = () => {
  const data = useStaticQuery(graphql`
      query BottomAnimatedCarousel {
        allFile(
          filter: {name: {regex: "/-bottom-carousel$/"}, extension: {regex: "/(png|webp)/"}}
        ) {
          nodes {
            id
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                height: 100
                transformOptions: { duotone: { highlight: "#031F40", shadow: "#ffffff" } }
              )
            }
          }
        }
      }  
    `);
  
  const breakpoint = useScreenClass();

  return (
    <StyledSectionWrapper component="section">
      <Row>
        <Col xs={12}>
          {
            breakpoint === 'xs' || breakpoint === 'md' && data.allFile.nodes.length > 5
            ? null
            : <AnimatedAutoCarousel nodes={data.allFile.nodes} />
          }
        </Col>
      </Row>
    </StyledSectionWrapper>
  )
}