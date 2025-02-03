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
  color: white;
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary1};
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
  }
`;

export const CallToActionSection3: React.FC = () => {
  const data = useStaticQuery(graphql`
    query CallToActionSection3 {
      allJsonJson {
        nodes {
          en {
            callToActionSection3 {
              buttonText
              text
            }
          }
          es {
            callToActionSection3 {
              buttonText
              text
            }
          }
        }
      }
    }
  `);
  const userLanguage = useUserLanguage();

  const texts = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.callToActionSection3 : data.allJsonJson.nodes[0].en.callToActionSection3;

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