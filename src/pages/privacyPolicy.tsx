import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import { LegalDocumentSection } from '@/sections';

const PrivacyPolicyPage: React.FC<PageProps> = () => {

  return (
    <>
      <LegalDocumentSection documentType="privacyPolicy" />
    </>
  )
}

export default PrivacyPolicyPage;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Privacy" />
);