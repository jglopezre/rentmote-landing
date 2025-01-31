import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';
import { FaqsSection } from '@/sections';

const FaqsPage: React.FC<PageProps> = () => {

  return (
    <>
      <FaqsSection />
    </>
  )
}

export default FaqsPage;

export const Head: HeadFC = () => (
  <Seo title="Rentomte - Frequently Questions" />
);