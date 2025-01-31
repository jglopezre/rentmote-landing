import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import { LegalDocumentSection } from '@/sections';


const TermsOfServicePage: React.FC<PageProps> = () => {

  return (
    <>
      <LegalDocumentSection documentType="termsOfService" />
    </>
  )
}

export default TermsOfServicePage;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Terms" />
);