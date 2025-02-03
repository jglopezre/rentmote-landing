import { VerticalInfoBigCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

const StyledContainerSection = styled(Container)`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.section};
  padding-bottom: ${({ theme }) => theme.spacing.section};
  color: ${({ theme }) => theme.colors.light};
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary1};
  }
`;

const StyledTitle = styled(Col)`
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

const CardContainer = styled(Col)`
  display: grid;
  place-items: center;
`;

export const BigInfoSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BigInfoSection {
      allJsonJson {
        nodes {
          en {
            bigInfoSection {
              cards {
                description
                image
                title
                url {
                  to
                  text
                }
              }
              description
              title
            }
          }
          es {
            bigInfoSection {
              cards {
                description
                image
                title
                url {
                  to
                  text
                }
              }
              description
              title
            }
          }
        }
      }
      allFile(filter: {name: {regex: "/-information-section$/"}}) {
        nodes {
          childImageSharp {
            id
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
          name
        }
      }
    }  
  `);
  const userLanguage = useUserLanguage();

  const content = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.bigInfoSection : data.allJsonJson.nodes[0].en.bigInfoSection;
  const cards: any[] = content.cards;
  
  return (
    <StyledContainerSection>
      <Row>
        <StyledTitle>
          <div>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </StyledTitle>
      </Row>
      <Row >
        {
          cards.map((card) => {
            console.log(card)
            const gatsbyImage = data.allFile.nodes.find((image: any) => image.name === card.image)
            console.log(gatsbyImage)
            return (
              <CardContainer
                key={gatsbyImage.id}
                xs={12}
                md={6}
              >
                <VerticalInfoBigCard
                  title={card.title}
                  description={card.description}
                  imageSrc={gatsbyImage}
                  url={card.url}
                />
              </CardContainer>
            )
          })  
        }
      </Row>
    </StyledContainerSection>
  );
}