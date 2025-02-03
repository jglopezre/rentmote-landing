import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import { CharacteristicCard } from '@/components';
import { useUserLanguage } from '@/customHooks';

const StyledSectionWrapper = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

const InnerContainer = styled(Row)<{ $breakpoint: string }>`
  padding: ${( props ) => props.$breakpoint === 'xs' || props.$breakpoint === 'md' ?  '0.5rem' : '2rem'} ${( props ) => props.$breakpoint === 'xs' || props.$breakpoint === 'md' ?  '1rem' : '3rem'} ;
  background-color: ${({ theme }) => theme.colors.light2};
  border-radius: ${({ theme }) => theme.border.radius.base};
`;

const StyledTitle = styled(Col)`
  color: ${({ theme }) => theme.colors.primary1};
  text-align: center;
  padding-bottom: 4rem;
  & div {
    display: inline-block;
    width: 100%;
    max-width: 700px;
    & h1 {
      position: relative;
      font-weight: 400;
      font-size: ${({ theme }) => theme.typography.fontSize.s2};
    }
    & p {
      max-width: inherit;
      word-wrap: break-word;
      font-size: ${({ theme }) => theme.typography.fontSize.s5};
    }
  }
`;

const StyledSelectorsContainer = styled(Col)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary1};
  
`

const StyledOptions = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  transition: 0.2s;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.fontSize.s4};
  position: relative;
  color: ${(props) => props.$isSelected ? props.theme.colors.primary2 : props.theme.colors.primary1};
  & p{
    transform: translateX(${(props) => props.$isSelected ? '20px' : '0'});
  }
  &:hover p {
    transition: transform 0.2s;
    transform: translateX(20px);
  }
  &::before{
    content: '';
    display: box;
    position: absolute;
    width: 80%;
    height: 2px;
    left: 0;
    bottom: 10px;
    background-color: ${({ theme }) => theme.colors.primary1};
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
              title
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
              title
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
            gatsbyImageData(height: 480, layout: CONSTRAINED, placeholder: BLURRED)
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

  const cards = (() => {
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
  })();

  return (
    <StyledSectionWrapper component="section" id="characteristics-section">
      <InnerContainer $breakpoint={breakpoint}>
        <StyledTitle xs={12}>
          <div>
            <h1>{selectedTexts.title}</h1>
            <p>{selectedTexts.description}</p>
          </div>
        </StyledTitle>
        <StyledSelectorsContainer xs={12} md={6}>
          {
            cards.map((card) => (
              <StyledOptions
                key={card.id}
                onClick={() => setSelectedCard(card)}
                $isSelected={card.id === selectedCard?.id}
              >
                <p>{card.title}</p>
              </StyledOptions>
            ))
          }
        </StyledSelectorsContainer >
        <Col xs={12} md={6}>
          <CharacteristicCard
            description={selectedCard?.description}
            imageSrc={selectedCard?.image}
          />
        </Col>
      </InnerContainer>
    </StyledSectionWrapper>
  );
}
