import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';

const Faqs: React.FC<PageProps> = () => {

  return (
    <Layout>
      <h1>Preguntas Frecuentes</h1>
    </Layout>
  )
}

export default Faqs;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Frequently Questions" />
);