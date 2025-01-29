import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';

const HowItWorksPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <h1>Cómo Funciona</h1>
    </Layout>
  )
}

export default HowItWorksPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - How it Works" />
);