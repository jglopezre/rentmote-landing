import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>404 Not Found!</h1>
      <Link to="/">Volver</Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <Seo title="Rentmote Not Found" />
);
