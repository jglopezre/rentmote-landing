import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { LegalDocumentSection } from '@/sections';


const TermsOfServicePage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <LegalDocumentSection documentType="termsOfService" />
    </Layout>
  )
}

export default TermsOfServicePage;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Terms" />
);