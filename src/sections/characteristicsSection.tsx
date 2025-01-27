import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Col, Row, useScreenClass } from 'react-grid-system';
import { CharacteristicCard } from '@/components';
import { useUserLanguage } from '@/customHooks';

const StyledSectionWrapper = styled(Row)<{ $breakpoint: string }>`
  padding-bottom: 3rem;
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
`;

const StyledTitle = styled(Col)`
  color: ${({ theme }) => theme.colors.primary2};
  text-align: center;
  padding-bottom: 3rem;
  & h1 {
    font-family: Lexend, Arial, Helvetica, sans-serif;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 40%;
      bottom: -20px;
      width: 20%;
      height: 5px;
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary2}, ${({ theme }) => theme.colors.secondary1}, ${({ theme }) => theme.colors.secondary2});
      border-radius: 5px;
    }
  }
`

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
      allJsonJson {
        nodes {
          en {
            characteristicsSection {
              description
            }
          }
          es {
            characteristicsSection {
              description
            }
          }
        }
      }
    }
  `);

  const userLanguage = useUserLanguage();

  const cards: any[] = data[userLanguage]?.nodes ?? data['en'].nodes;

  const texts = data.allJsonJson.nodes[0]; 
  const selectedTexts = texts[userLanguage].characteristicsSection ?? texts['en'].characteristicsSection;

  const breakpoint = useScreenClass();

  return (
    <StyledSectionWrapper component="section" id="characteristics-section" $breakpoint={breakpoint} nogutter >
      <StyledTitle xs={12}>
        <h1>{selectedTexts.description}</h1>
      </StyledTitle>
      {
        cards.map(( card: any ) => (
          <CharacteristicCard
            title={card.frontmatter.title}
            description={card.frontmatter.description}
            imageSrc={card.frontmatter.image.childImageSharp.gatsbyImageData}
          />
        ))
      }
    </StyledSectionWrapper>
  );
}
