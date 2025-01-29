import { useUserLanguage } from './useUserLanguage';
import { graphql, useStaticQuery } from 'gatsby';

export const useMarkDownContent = (type: string) => {
  const userLanguage = useUserLanguage();

  const data = useStaticQuery(graphql`
    query UseMarkDownContent{
      allMarkdownRemark {
        nodes {
          frontmatter {
            lang
            type
          }
          html
        }
      }
    }
  `);

  const document = data.allMarkdownRemark.nodes.find(
    ( node: any ) => node.frontmatter.lang === userLanguage && node.frontmatter.type === type
  )

  return document ? document.html : "<p>Content not found</p>"
}