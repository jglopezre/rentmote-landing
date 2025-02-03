import { QuantityMiniCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing.section};
  margin-bottom: ${({ theme }) => theme.spacing.section};
`
const StyledCardRow = styled(Row)`
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.sm};
  border-color: ${({ theme }) => theme.colors.light3};
  border-radius: ${({ theme }) => theme.border.radius.base};
`;


export const QuantityInformationSectiton: React.FC = () => {
  const data = useStaticQuery(graphql`
    query uantityInformationSectiton {
      allJsonJson {
        nodes {
          en {
            quantityInformationSection {
              description
              quantity
              title
              unity
            }
          }
          es {
            quantityInformationSection {
              description
              quantity
              title
              unity
            }
          }
        }
      }
    }  
  `);

  const userLanguage = useUserLanguage();

  const texts: any[] = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.quantityInformationSection : data.allJsonJson.nodes[0].en.quantityInformationSection
  console.log(texts)

  return (
    <StyledSectionWrapper>
      <StyledCardRow>
        {
          texts.map((text, index) => (
            <Col key={index}>
              <QuantityMiniCard
                title={text.title}
                description={text.description}
                quantity={text.quantity}
                unity={text.unity}
              />
            </Col>

          ))
        }
      </StyledCardRow>
    </StyledSectionWrapper>
  );
}
