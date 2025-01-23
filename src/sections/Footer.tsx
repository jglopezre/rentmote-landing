import React from 'react';
import { Col, Row, useScreenClass } from 'react-grid-system';
import { useUserLanguage } from '@/customHooks';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { text } from 'stream/consumers';
import { StaticImage } from 'gatsby-plugin-image';
import { SocialBox } from '@/components';

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

const StyledFooterWrapper = styled(Row)<{ $breakpoint:string }>`
  padding-top: 2rem;
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  font-size: ${({ theme }) => theme.typography.fontSize.s5};
  line-height: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary1};
`;

const LogoContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LinksContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialContainer = styled(Col)`
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary1};
  }
`;

const CopyCol = styled(Col)`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.s6};
  color: darkgray;
`;
export const Footer: React.FC = () => {
  const userLanguage = useUserLanguage();

  const texts = userLanguage === 'es' ? textsEs : textsEn;

  const breakpoint = useScreenClass();

  return (
    <StyledFooterWrapper component="footer" $breakpoint={breakpoint}>
      <LogoContainer xs={12} md={4}>
        <Link to="">
          <StaticImage
            src="../images/rentmote-logotipo-white.png"
            alt=''
            width={120}
          />
        </Link>
      </LogoContainer>
      <LinksContainer xs={12} md={4}>
        <div>
          <StyledLink to="">{texts.termsOfService}</StyledLink>
          <br/>
          <StyledLink to="">{texts.privacyPolicy}</StyledLink>
        </div>
      </LinksContainer>
      <SocialContainer xs={12} md={4}>
        <SocialBox />
      </SocialContainer>
      <CopyCol xs={12}>
        <p>
          &copy;&nbsp;
          {date.getFullYear()}
          &nbsp;
          {texts.copyright}
        </p>
      </CopyCol>
    </StyledFooterWrapper>
  );
}