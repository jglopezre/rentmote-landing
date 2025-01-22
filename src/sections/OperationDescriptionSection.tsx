import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';
import { OperationDesciptionCard } from '@/components';


const StyledTextCol = styled(Col)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary2};
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 30%;
    bottom: -20px;
    width: 40%;
    height: 5px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary2}, ${({ theme }) => theme.colors.secondary1}, ${({ theme }) => theme.colors.secondary2});
    border-radius: 5px;
  }
`;

const LowerText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s4};
  color: ${({ theme }) => theme.colors.primary1};
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
                    width: 120
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
                    width: 120
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
    <Row component="section">
      <StyledTextCol xs={12}>
        <UpperText>Cómo Funciona</UpperText>
        <LowerText>Es muy fácil</LowerText>
      </StyledTextCol>
      <Col xs={12}>
        <Row>
          {
            cards.map((card: any, index) => (
              <OperationDesciptionCard
                title={card.frontmatter.title}
                description={card.frontmatter.description}
                imageSrc={card.frontmatter.image.childImageSharp.gatsbyImageData}
                value={index + 1}
              />
            ))
          }
        </Row>
      </Col>
    </Row>
  );
}