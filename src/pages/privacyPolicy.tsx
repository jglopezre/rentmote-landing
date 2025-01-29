import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { LegalDocumentSection } from '@/sections';

const PrivacyPolicyPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <LegalDocumentSection documentType="privacyPolicy" />
    </Layout>
  )
}

export default PrivacyPolicyPage;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Privacy" />
);