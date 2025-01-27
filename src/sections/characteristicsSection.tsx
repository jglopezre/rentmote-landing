import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Col, Row, useScreenClass } from 'react-grid-system';
import { CharacteristicCard } from '@/components';
import { useUserLanguage } from '@/customHooks';

const StyledSectionWrapper = styled(Row)<{ $breakpoint: string }>`
  padding-top: 3rem;
  padding-bottom: 4rem;
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  background-color: ${({ theme }) => theme.colors.primary1};
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

const StyledSelectorsContainer = styled(Col)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.light};
  
`

const StyledOptions = styled.h1`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: translateX(15px);
  }
`;

export const CharacteristicsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allJsonJson {
        nodes {
          en {
            characteristicsSection {
              description
              cards {
                description
                image
                title
              }
            }
          }
          es {
            characteristicsSection {
              description
              cards {
                description
                image
                title
              }
            }
          }
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          name
          childrenImageSharp {
            id
            gatsbyImageData(width: 340, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const breakpoint = useScreenClass();
  
  const userLanguage = useUserLanguage();

  const [selectedCard, setSelectedCard] = useState();

  const imagesData: any[] = data.allFile.nodes;
  const texts = data.allJsonJson.nodes[0];
  const selectedTexts = texts[userLanguage].characteristicsSection ?? texts['en'].characteristicsSection;
  
  const imagesNames: any[] = selectedTexts.cards

  const cardImages = () => {
    const provitional: any[] = []
    imagesNames.forEach((elem) => {
      const provitionalImageData = imagesData.find((image) => image.name === elem.image)
      provitional.push({
        id: provitionalImageData.childrenImageSharp[0].id,
        image: provitionalImageData.childrenImageSharp[0].gatsbyImageData,
        description: elem.description,
        title: elem.title
      })
    })
    return provitional;
  }

  const cards = cardImages();

  

  return (
    <StyledSectionWrapper component="section" id="characteristics-section" $breakpoint={breakpoint} nogutter >
      <StyledTitle xs={12}>
        <h1>{selectedTexts.description}</h1>
      </StyledTitle>
      <StyledSelectorsContainer xs={12} md={6}>
        {
          cards.map((card) => (
            <StyledOptions
              key={card.id}
              onClick={() => setSelectedCard(card)}
            >
              {card.title}
            </StyledOptions>
          ))
        }
      </StyledSelectorsContainer >
      <Col xs={12} md={6}>
        {
          selectedCard
          ? (
              <CharacteristicCard
                description={selectedCard.description}
                imageSrc={selectedCard.image}
              />
          )
          : null
        }
      </Col>
    </StyledSectionWrapper>
  );
}

{/* <StyledSectionWrapper component="section" id="characteristics-section" $breakpoint={breakpoint} nogutter >
      <StyledTitle xs={12}>
        <h1>{selectedTexts.description}</h1>
      </StyledTitle>
      {
        cards.map(( card: any ) => (
          <CharacteristicCard
            title={card.title}
            description={card.description}
            imageSrc={card.image.childrenImageSharp[0].gatsbyImageData}
          />
        ))
      }
    </StyledSectionWrapper> */}
/* const data = useStaticQuery(graphql`
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
`); */
