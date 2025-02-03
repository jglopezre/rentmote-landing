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

const IndexPage: React.FC<PageProps> = () => {
  
  return (
    <>
      <HeroSection />
      <ConvergenceAnimationSection />
      <LogotipoAnimatedCarouselSection />
      <OperationDescriptionSection />
      <CharacteristicsSection />
      <QuantityInformationSectiton />
      <BigInfoSection />
      <ApplicationDescriptionSection />
      <CallToActionSection3 />
      <BottomAnimatedCarousel />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <Seo />
)
