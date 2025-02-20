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

export const ScrollableStickyInfoSection2: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ScrollableStickyInfoSection2 {
      allJsonJson {
        nodes {
          en {
            scrollableStickyInfoSection2 {
              description
              title
            }
          }
          es {
            scrollableStickyInfoSection2 {
              description
              title
            }
          }
        }
      }
    }  
  `);
  
  const { userLanguage } = useUserLanguage();

  const content = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.scrollableStickyInfoSection2 : data.allJsonJson.nodes[0].en.scrollableStickyInfoSection2;

  return (
    <StyledSectionContainer component="section">
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
              src="../images/rentmote-woman-listening-music-sticky-section-2.jpg"
              alt="rentmote-woman-listening-music"
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
