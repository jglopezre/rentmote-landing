import { AnimatedPicturePresenter } from '@/components/AnimatedPicturePresenter';
import React from 'react';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
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

export const ExperienceSection: React.FC = () => {
  const breakpoint = useScreenClass();
  
  return (
    <StyledSectionWrapper component="section">
      <Row>
        <ContentTextContainer xs={12} lg={6} $breakpoint={breakpoint}>
          <div>
            <h1>The all-in-one software whose goal is your growth.</h1>
            <p>Our cutting-edge software and world-class team are here to help your business become the most profitable, organized, and successful it is ever been.</p>
          </div>
        </ContentTextContainer>
        <AnimatedImageContainer xs={12} lg={6}>
          <BarsContainer>
            {
              Array.from({ length: 4 }).map((_, index) => (
                <RotatedBar />
              )) 
            }
          </BarsContainer>
          <AnimatedPicturePresenter />
        </AnimatedImageContainer>
      </Row>
    </StyledSectionWrapper>
  );
}