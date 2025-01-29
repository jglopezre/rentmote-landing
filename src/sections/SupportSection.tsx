import { MiniCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Container)`
  margin-bottom: 8rem;
`;

const StyledTextCol = styled(Col)`
  color: ${({ theme }) => theme.colors.primary1};
  text-align: center;
  padding-bottom: 4rem;
  padding-top: 4rem;
  & div {
    display: inline-block;
    width: 100%;
    max-width: 800px;
    & h1 {
      font-weight: 300;
      font-size: ${({ theme }) => theme.typography.fontSize.s1};
    }
    & p {
      max-width: inherit;
      word-wrap: break-word;
      font-size: ${({ theme }) => theme.typography.fontSize.s5};
    }
  }
`;

const CardContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SupportSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SupportSection {
      allJsonJson {
        nodes {
          en {
            supportSection {
              description
              title
              cards {
                image
                title
              }
            }
          }
          es {
            supportSection {
              cards {
                image
                title
              }
              description
              title
            }
          }
        }
      }
      allFile(filter: {name: {regex: "/-support$/"}}) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 360, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const CardsRow = styled(Row)`
    background: linear-gradient(${({ theme }) => theme.colors.light2}, ${({ theme }) => theme.colors.light} );
    padding-top: 3rem;
    border-radius: ${({ theme }) => theme.border.radius.base};

  `

  const userLanguage = useUserLanguage();

  const images = data.allFile.nodes;
  
  const texts = userLanguage === 'es' ?  data.allJsonJson.nodes[0]['es'].supportSection : data.allJsonJson.nodes[0]['en'].supportSection
  const cards: any[] = texts.cards
  return(
    <StyledSectionWrapper component="section">
      <Row>
        <StyledTextCol xs={12}>
          <div>
            <h1>{texts.title}</h1>
            <p>{texts.description}</p>
          </div>
        </StyledTextCol>
      </Row>
      <CardsRow>
        {
          cards.map((card) => {
            const gatsbyImage = images.find((image: any) => image.name === card.image)
            return (
              <CardContainer xs={4}>
                <MiniCard
                  key={gatsbyImage.id}
                  title={card.title}
                  description={card.description}
                  imageSrc={gatsbyImage}
                />
              </CardContainer>
            )
          })
        }
      </CardsRow>
    </StyledSectionWrapper>
  )
}