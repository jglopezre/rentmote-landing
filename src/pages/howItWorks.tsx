import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import {
  ExperienceSection,
  InfoCardsSection,
  CallToActionSection1,
  CallToActionSection2,
  SimpleTestimonialSection
} from '@/sections';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <ExperienceSection />
      <InfoCardsSection />
      <CallToActionSection1 />
      <SimpleTestimonialSection />
      <CallToActionSection2 />
    </Layout>
  )
}

export default HowItWorksPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - How it Works" />
);