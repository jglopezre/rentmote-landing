import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import {
  CallToActionSection2,
  ExperienceSection2,
  SelectableInfoCardsSection,
  ScrollableStickyInfoSection2,
  CallToActionSection4,
  SimpleTestimonialSection2
} from '@/sections';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <>
      <ExperienceSection2 />
      <SelectableInfoCardsSection />
      <ScrollableStickyInfoSection2 />
      <SimpleTestimonialSection2 />
      <CallToActionSection4 />
    </>
  )
}

export default HowItWorksPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - How it Works" />
);