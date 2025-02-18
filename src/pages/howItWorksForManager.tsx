import { Seo } from '@/components';
import { CallToActionSection1, CallToActionSection2, ExperienceSection, InfoCardsSection, ScrollableStickyInfoSection, SimpleTestimonialSection } from '@/sections';
import { HeadFC, PageProps } from 'gatsby';
import React from 'react';

const HowItWorksForManager: React.FC<PageProps> = () => {
  return (
    <>
      <ExperienceSection />
      <InfoCardsSection />
      <ScrollableStickyInfoSection />
      <CallToActionSection1 />
      <SimpleTestimonialSection />
      <CallToActionSection2 />
    </>
  );
}

export default HowItWorksForManager;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - How it Works for Managers" />
);