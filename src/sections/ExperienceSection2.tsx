import React from 'react';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import { AnimatedPicturePresenter } from '@/components/AnimatedPicturePresenter';
import { graphql, useStaticQuery } from 'gatsby';
import { useUserLanguage } from '@/customHooks';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.section};
  padding-bottom: ${({ theme }) => theme.spacing.section};
`;

const ContentTextContainer = styled(Col)<{$breakpoint: string}>`
  display: grid;
  place-items: center;
  & div {
    padding-right: ${({ $breakpoint }) => $breakpoint === 'xs' || $breakpoint === 'md' ? 'inherit' : '3rem'};
  }
`;

const AnimatedImageContainer = styled(Col)`
  background-color: ${({ theme }) => theme.colors.primary1};
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: ${({ theme }) => theme.border.radius.base};
  position: relative;
`;

const BarsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;
const RotatedBar = styled.div`
  width: 35%;
  height: 13%;
  margin-left: -2rem;
  background-color: ${({ theme }) => theme.colors.primary2};
  margin-bottom: 3.5rem;
  transform: rotate(25deg);
`;

export const ExperienceSection2: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ExperienceSection2 {
      allJsonJson {
        nodes {
          en {
            experienceSection2 {
              description
              title
            }
          }
          es {
            experienceSection2 {
              description
              title
            }
          }
        }
      }
    }  
  `);

  const breakpoint = useScreenClass();

  const { userLanguage } = useUserLanguage();

  const texts = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.experienceSection2 : data.allJsonJson.nodes[0].en.experienceSection2;

  return (
    <StyledSectionWrapper component="section">
      <Row>
        <ContentTextContainer xs={12} lg={6} $breakpoint={breakpoint}>
          <div>
            <h1>{texts.title}</h1>
            <p>{texts.description}</p>
          </div>
        </ContentTextContainer>
        <AnimatedImageContainer xs={12} lg={6}>
          <BarsContainer>
            {
              Array.from({ length: 4 }).map((_, index) => (
                <RotatedBar key={index}/>
              )) 
            }
          </BarsContainer>
          <AnimatedPicturePresenter />
        </AnimatedImageContainer>
      </Row>
    </StyledSectionWrapper>
  );
}