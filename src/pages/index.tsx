import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import { Seo } from '@/components/Seo';
import {
  ApplicationDescriptionSection,
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
      <ApplicationDescriptionSection />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <Seo />
)
