import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';
import { OperationDesciptionCard } from '@/components';

const StyledSextionWrapper = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 5rem;
  position: relative;
`;

const StyledTextCol = styled(Col)`
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

export const OperationDescriptionSection: React.FC = () => {
    const data = useStaticQuery(graphql`
      query OperationDescriptionSection {
        allJsonJson {
          nodes {
            en {
              operationDescription {
                cards {
                  description
                  image
                  title
                }
                description
                title
              }
            }
            es {
              operationDescription {
                cards {
                  description
                  image
                  title
                }
                description
                title
              }
            }
          }
        }
        allFile(filter: {name: {regex: "/-opeartion-description$/"}}) {
          nodes {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 360
                height: 600
                placeholder: BLURRED
              )
            }
            name
            id
          }
        }
      }
    `);
    const userLanguage = useUserLanguage();

    const texts = data.allJsonJson.nodes[0];
    const selectedTexts = userLanguage === 'es' ? texts.es.operationDescription : texts.en.operationDescription;
    const cards: any[] = selectedTexts.cards;
    const imagesSrcs: any[] = data.allFile.nodes;
    console.log(imagesSrcs)

  return (
    <StyledSextionWrapper component="section" id="operation-description">
      <Row justify='center' align='center'>
        <StyledTextCol xs="content">
          <div>
            <h1>{selectedTexts.title}</h1>
            <p>{selectedTexts.description}</p>
          </div>
        </StyledTextCol>
        <Col xs={12}>
          <Row>
            {
              cards.map((card: any, index) => {
                const imageSrc = imagesSrcs.find((image) => image.name === card.image);
                console.log(imageSrc)
                return (
                  <Col
                    xs={12}
                    lg={4}
                    style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
                    key={imageSrc.id}
                  >
                    <OperationDesciptionCard
                      title={card.title}
                      description={card.description}
                      imageSrc={imageSrc}
                      value={index + 1}
                    />
                  </Col>
                );
              })
            }
          </Row>
        </Col>
      </Row>
    </StyledSextionWrapper>
  );
}
