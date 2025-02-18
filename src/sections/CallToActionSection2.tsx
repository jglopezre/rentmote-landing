import { BigTextWithButton } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.section};
  padding-bottom: ${({ theme }) => theme.spacing.section};
`;

export const CallToActionSection2: React.FC = () => {
  const data = useStaticQuery(graphql`
    query CallToActionSection2 {
      allJsonJson {
        nodes {
          en {
            callToActionSection2 {
              buttonText
              text
            }
          }
          es {
            callToActionSection2 {
              buttonText
              text
            }
          }
        }
      }
    }
  `);
  const { userLanguage } = useUserLanguage();

  const texts = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.callToActionSection2 : data.allJsonJson.nodes[0].en.callToActionSection2

  const onActionHandle = () => {
    alert("Este sección esta en construcción");
    console.log("Boton presionado");
  }
  return (
    <StyledSectionWrapper component="section">
      <Row>
        <Col>
          <BigTextWithButton
            text={texts.text}
            buttonText={texts.buttonText}
            buttonAction={onActionHandle}
          />
        </Col>
      </Row>
    </StyledSectionWrapper>
  )
}
