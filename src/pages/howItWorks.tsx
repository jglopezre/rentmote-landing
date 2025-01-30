import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { ExperienceSection } from '@/sections';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <ExperienceSection />
    </Layout>
  )
}

export default HowItWorksPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - How it Works" />
);