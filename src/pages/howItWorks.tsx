import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import {
  CallToActionSection1,
  CallToActionSection2,
  SimpleTestimonialSection,
  ScrollableStickyInfoSection,
  ExperienceSection2,
  SelectableInfoCardsSection
} from '@/sections';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <>
      <ExperienceSection2 />
      <SelectableInfoCardsSection />
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