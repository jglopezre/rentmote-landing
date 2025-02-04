import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import {
  ExperienceSection,
  InfoCardsSection,
  CallToActionSection1,
  CallToActionSection2,
  SimpleTestimonialSection
} from '@/sections';
import StickyScrollAnimation from '@/sections/StickyAnimationSection';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <>
      <ExperienceSection />
      <InfoCardsSection />
      <StickyScrollAnimation />
      <CallToActionSection1 />
      <SimpleTestimonialSection />
      <CallToActionSection2 />
    </>
  )
}

export default HowItWorksPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - How it Works" />
);