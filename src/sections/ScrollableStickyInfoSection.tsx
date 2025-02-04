import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-grid-system';
import { HorizontalInfoMinicard } from '@/components';
import { theme } from '@/styles';
import { useUserLanguage } from '@/customHooks';

const StyledSectionContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.section};
  padding-bottom: ${({ theme }) => theme.spacing.section};
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const ScrollableStickyInfoSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ScrollableStickyInfoSection {
      allJsonJson {
        nodes {
          en {
            scrollableStickyInfoSection {
              description
              title
            }
          }
          es {
            scrollableStickyInfoSection {
              description
              title
            }
          }
        }
      }
    }  
  `);
  
  const userLanguage = useUserLanguage();

  const content = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.scrollableStickyInfoSection : data.allJsonJson.nodes[0].en.scrollableStickyInfoSection;

  return (
    <StyledSectionContainer>
      <Row>
        <Col xs={12} md={6}>
          {
            content.map((elem: any, index: number) => (
              <HorizontalInfoMinicard
                key={index}
                title={elem.title}
                description={elem.description}
              />
            ))
          }
        </Col>
        <ImageCol xs={12} md={6}>
          <div>
            <StaticImage
              src="../images/rentmote-working-scrollable-sticky-section.jpg"
              alt="rentmote-woman-working"
              height={640}
              style={{
                position: 'sticky',
                top: '18%',
                borderRadius: theme.border.radius.base
              }}
            />

          </div>
        </ImageCol>
      </Row>
    </StyledSectionContainer> 
  )
}
