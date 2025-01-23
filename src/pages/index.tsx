import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import {
  ApplicationDescription,
  CharacteristicsSection,
  HeroSection,
  OperationDescriptionSection
} from '@/sections';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <OperationDescriptionSection />
      <CharacteristicsSection />
      <ApplicationDescription />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Rentmote</title>
