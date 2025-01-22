import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import {
  ApplicationDescription,
  CharacteristicsSection,
  OperationDescriptionSection
} from '@/sections';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ApplicationDescription />
      <OperationDescriptionSection />
      <CharacteristicsSection />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Rentmote</title>
