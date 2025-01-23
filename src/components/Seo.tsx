import React from 'react';
import { useSiteMetadata } from '@/customHooks';

type SeoMembers = {
  title: string,
  description: string,
  url: string,
  image: string,
}

type SeoProps = Pick<Partial<SeoMembers>, 'title' | 'description'> & {
  children?: React.ReactNode
  pathname?: string,
}

export const Seo: React.FC<SeoProps> = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

  const seo:SeoMembers = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    url: `${siteUrl}${pathname ?? ''}`,
    image: `${siteUrl}${image}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  );
};
