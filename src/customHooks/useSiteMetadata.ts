import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          description
          siteUrl
          title
          image
        }
      }
    }  
  `);

  return data.site.siteMetadata;
}
