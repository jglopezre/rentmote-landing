import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { ScrollingAnimatedImageConvergence, Seo } from '@/components';
import {
  ExperienceSection,
  InfoCardsSection,
  CallToActionSection1,
  CallToActionSection2,
  SimpleTestimonialSection,
  ScrollableStickyInfoSection
} from '@/sections';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <>
      <ExperienceSection />
      <InfoCardsSection />
      <ScrollableStickyInfoSection />
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