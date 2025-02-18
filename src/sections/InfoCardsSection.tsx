import { MiniTextCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

type TextsProps = {
  title: string,
  description: string,
  pillText: string
}

const StyledSectionWrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.light2};
  border-radius: ${({ theme }) => theme.border.radius.base};
`;

export const InfoCardsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query InfoCardsSection {
      allJsonJson {
        nodes {
          en {
            infoCardSection {
              description
              pillText
              title
            }
          }
          es {
            infoCardSection {
              description
              pillText
              title
            }
          }
        }
      }
    }
  `);

  const { userLanguage } = useUserLanguage();

  const texts: TextsProps[] = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.infoCardSection : data.allJsonJson.nodes[0].en.infoCardSection;

  return (
    <StyledSectionWrapper component="section">
      <Row>
        {
          texts.map((text, index) => (
            <Col xs={12} lg={4}>
              <MiniTextCard
                title={text.title}
                description={text.description}
                pillText={text.pillText}
              />
            </Col>
          ))
        }
      </Row>
    </StyledSectionWrapper>
  );
}