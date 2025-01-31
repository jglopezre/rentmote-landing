import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { Seo } from '@/components';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>404 Not Found!</h1>
      <Link to="/">Volver</Link>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <Seo title="Rentmote Not Found" />
);
