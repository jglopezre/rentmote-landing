import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import {
  ApplicationDescriptionSection,
  BottomAnimatedCarousel,
  CharacteristicsSection,
  ConvergenceAnimationSection,
  HeroSection,
  LogotipoAnimatedCarouselSection,
  OperationDescriptionSection
} from '@/sections';

const IndexPage: React.FC<PageProps> = () => {
  
  return (
    <>
      <HeroSection />
      <ConvergenceAnimationSection />
      <LogotipoAnimatedCarouselSection />
      <OperationDescriptionSection />
      <CharacteristicsSection />
      <ApplicationDescriptionSection />
      <BottomAnimatedCarousel />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <Seo />
)
