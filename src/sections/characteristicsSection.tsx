import { CharacteristicCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';


export const CharacteristicsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query CharacteristicsCard {
      en: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/md/en/characteristicsCards/" } }) {
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
      es: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/md/es/characteristicsCards/" } }) {
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

  const cards: any[] = data[userLanguage]?.nodes ?? data['en'].nodes;
  
  return (
    <Row component="section" nogutter>
      {
        cards.map(( card: any ) => (
          <CharacteristicCard
            title={card.frontmatter.title}
            description={card.frontmatter.description}
            imageSrc={card.frontmatter.image.childImageSharp.gatsbyImageData}
          />
        ))
      }
    </Row>
  );
}
