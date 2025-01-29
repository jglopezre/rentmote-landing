import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { FaqsSection } from '@/sections';

const FaqsPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <FaqsSection />
    </Layout>
  )
}

export default FaqsPage;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Frequently Questions" />
);