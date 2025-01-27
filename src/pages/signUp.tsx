import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { SignUpProvitionalSection } from '@/sections/SignUpProvitionalSection';

const SignUpPage: React.FC<PageProps> = () => {
  return(
    <Layout>
      <SignUpProvitionalSection />
    </Layout>
  );
}

export default SignUpPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - SignUp" />
)