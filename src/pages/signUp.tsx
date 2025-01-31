import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import { SignUpProvitionalSection } from '@/sections/SignUpProvitionalSection';

const SignUpPage: React.FC<PageProps> = () => {
  return(
    <>
      <SignUpProvitionalSection />
    </>
  );
}

export default SignUpPage;

export const Head: HeadFC = () => (
  <Seo title="Rentmote - SignUp" />
)