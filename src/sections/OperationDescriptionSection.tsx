import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
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
      query OperationDescriptionCardQuery {
        en: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/md/en/operationDescription/" } }) {
          nodes {
            frontmatter {
              image {
                id
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 360
                    height: 600
                    placeholder: BLURRED
                  )
                }
              }
              description
              title
            }
          }
        }
        es: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/md/es/operationDescription/" } }) {
          nodes {
            frontmatter {
              image {
                id
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 360
                    height: 600
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
              operationDescription {
                description
                title
              }
            }
            es {
              operationDescription {
                description
                title
              }
            }
          }
        }
      }
    `);
    const userLanguage = useUserLanguage();

    const cards: any[] = data[userLanguage]?.nodes ?? data['en'].nodes;
    const texts = data.allJsonJson.nodes[0];
    const selectedTexts = texts[userLanguage].operationDescription ?? texts['en'].operationDescription;

    const breakpoint = useScreenClass();

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
              cards.map((card: any, index) => (
                <Col xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                  <OperationDesciptionCard
                    title={card.frontmatter.title}
                    description={card.frontmatter.description}
                    imageSrc={card.frontmatter.image.childImageSharp.gatsbyImageData}
                    value={index + 1}
                  />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </StyledSextionWrapper>
  );
}