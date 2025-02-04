import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import {
  ApplicationDescriptionSection,
  BigInfoSection,
  BottomAnimatedCarousel,
  CharacteristicsSection,
  ConvergenceAnimationSection,
  HeroSection,
  LogotipoAnimatedCarouselSection,
  OperationDescriptionSection,
  QuantityInformationSectiton,
  CallToActionSection3,
} from '@/sections';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.light};
`;

const GrayBackGroundWrapper = styled.div`
  background-image: linear-gradient(${({ theme }) => theme.colors.light2}, ${({ theme }) => theme.colors.light});
`;

const IndexPage: React.FC<PageProps> = () => {
  
  return (
    <>
      <HeroSection />
      <ConvergenceAnimationSection />
      <LogotipoAnimatedCarouselSection />
      <GrayBackGroundWrapper>
        <OperationDescriptionSection />
      </GrayBackGroundWrapper>
      <CharacteristicsSection />
      <QuantityInformationSectiton />
      <BackgroundWrapper>
        <BigInfoSection />
        <ApplicationDescriptionSection />
        <CallToActionSection3 />
        <BottomAnimatedCarousel />
      </BackgroundWrapper>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <Seo />
)
