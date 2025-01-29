import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { SupportSection } from '@/sections';

const SignUpPage: React.FC<PageProps> = () => {
  return(
    <Layout>
      <SupportSection />
    </Layout>
  );
}

export default SignUpPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - Suport" />
)