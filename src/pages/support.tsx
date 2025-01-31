import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import { SupportSection } from '@/sections';

const SignUpPage: React.FC<PageProps> = () => {
  return(
    <>
      <SupportSection />
    </>
  );
}

export default SignUpPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - Suport" />
)