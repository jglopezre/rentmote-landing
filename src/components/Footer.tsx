import React from 'react';
import { Col, Row } from 'react-grid-system';
import { useUserLanguage } from '@/customHooks';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { text } from 'stream/consumers';

const date = new Date();


const textsEs = {
  copyright: "Desarrollado por Rentmote. Todos los derechos reservados.",
  termsOfService: "Terminos de Servicio",
  privacyPolicy: 'Política de Privacidad',
}

const textsEn = {
  copyright: "Developed by Rentmote. All rights reserved.",
  termsOfService: "Terms of Service",
  privacyPolicy: 'Privacy Policy',
}

const StyledRow = styled(Row)`
  font-size: ${({ theme }) => theme.typography.fontSize.s5};
`;


const CopyCol = styled(Col)`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.s6};
  color: darkgray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary2};
  &:visited {
    color: ${({ theme }) => theme.colors.secondary2};
  }
`;

export const Footer: React.FC = () => {
  const userLanguage = useUserLanguage();

  const texts = userLanguage === 'es' ? textsEs : textsEn;

  return (
    <Row component="footer">
      <Col xs={4} debug></Col>
      <Col xs={4} debug>
        <StyledLink to="">{texts.termsOfService}</StyledLink>
        <br/>
        <StyledLink to="">{texts.privacyPolicy}</StyledLink>
      </Col>
      <Col xs={4} debug></Col>
      <CopyCol xs={12}>
        <p>
          &copy;&nbsp;
          {date.getFullYear()}
          &nbsp;
          {texts.copyright}
        </p>
      </CopyCol>
    </Row>
  );
}