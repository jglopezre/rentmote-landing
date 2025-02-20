import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';
import { BigTextWithButton } from '@/components';

const StyledSectionWrapper = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.section};
  padding-bottom: ${({ theme }) => theme.spacing.section};
  position: relative;
`;

export const CallToActionSection4: React.FC = () => {
  const data = useStaticQuery(graphql`
    query CallToActionSection4 {
      allJsonJson {
        nodes {
          en {
            callToActionSection4 {
              buttonText
              text
            }
          }
          es {
            callToActionSection4 {
              buttonText
              text
            }
          }
        }
      }
    }
  `);
  const { userLanguage } = useUserLanguage();

  const texts = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.callToActionSection4 : data.allJsonJson.nodes[0].en.callToActionSection4;

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