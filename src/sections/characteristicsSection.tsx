import { CharacteristicCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';


const SectionWrapper = styled(Row)`
  
`

export const CharacteristicsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query CharacteristicsCardQuery {
      en: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/md/en/" } }) {
        nodes {
          frontmatter {
            image {
              id
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 80
                  placeholder: BLURRED
                )
              }
            }
            description
            title
          }
        }
      }
      es: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/md/es/" } }) {
        nodes {
          frontmatter {
            image {
              id
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 80
                  placeholder: BLURRED
                )
              }
            }
            description
            title
          }
        }
      }
    }
  `);

  const userLanguage = useUserLanguage();

  console.log(userLanguage)

  const cards = data[userLanguage]?.nodes ?? data['en'].nodes;
  return (
    <SectionWrapper component="section">
      {
        cards.map(( card: any ) => (
          <Col xs={12} md={6  }>
            <CharacteristicCard
              title={card.frontmatter.title}
              description={card.frontmatter.description}
              imageSrc={card.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          </Col>
        ))
      }
    </SectionWrapper>
  );
}
