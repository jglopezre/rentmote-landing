import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';

const TermsOfService: React.FC<PageProps> = () => {

  return (
    <Layout>
      <h1>Terminos y condiciones</h1>
    </Layout>
  )
}

export default TermsOfService

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Terms" />
);