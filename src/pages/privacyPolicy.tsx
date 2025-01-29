import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';

const PrivacyPolicy: React.FC<PageProps> = () => {

  return (
    <Layout>
      <h1>Políticas de privacidad</h1>
    </Layout>
  )
}

export default PrivacyPolicy;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Privacy" />
);