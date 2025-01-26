import React from 'react';
import { graphql, HeadFC, PageProps, useStaticQuery } from 'gatsby';
import { Seo } from '@/components/Seo';
import Layout from '@/components/Layout';
import { Col, Row } from 'react-grid-system';
import { CountdownTimer } from '@/components';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s4};
  max-width: 60%;
`

const SignUpPage: React.FC<PageProps> = () => {
  /* const data = useStaticQuery(graphql`
      query SignUp {
        allJsonJson {
          nodes {
            en {
              heroContent {
                textC
              }
            }
            es {
              heroContent {
                textC
              }
            }
          }
        }
      }
  `);

  const userLanguage = useUserLanguage();
    const texts = data.allJsonJson.nodes[0][userLanguage].heroContent ?? data.allJsonJson.nodes[0]['en'].heroContent;
 */
  return(
    <Layout>
      <Row>
        <Col xs={12}>
          <StyledParagraph>Proximamenteee</StyledParagraph>
        </Col>
        <Col xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
          <CountdownTimer targetTime="2025-04-01T00:00:00Z"/>
        </Col>
      </Row>
    </Layout>
  );
}

export default SignUpPage;

export const Head: HeadFC = () => (
  <Seo title="Sign-Up" />
)