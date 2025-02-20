import React, { Fragment } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';
import { SocialBox, StoreBox } from '@/components';

const date = new Date();

const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-top-color: ${({ theme }) => theme.colors.light3};
  border-top-width: ${({ theme }) => theme.border.width.sm};
  border-top-style: ${({ theme }) => theme.border.style.solid};
`;

const StyledFooterWrapper = styled(Row)`
  padding-top: 2rem;
  font-size: ${({ theme }) => theme.typography.fontSize.s5};
  line-height: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.light};
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
  line-height: 2rem;
  font-size: ${({ theme }) => theme.typography.fontSize.s7};
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
  font-size: ${({ theme }) => theme.typography.fontSize.s7};
  color: darkgray;
`;
export const FooterSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FooterSection {
      allJsonJson {
        nodes {
          en {
            footerSection {
              copyright
              infoLinks {
                text
                url
              }
            }
          }
          es {
            footerSection {
              copyright
              infoLinks {
                text
                url
              }
            }
          }
        }
      }
    }  
  `);
  const { userLanguage } = useUserLanguage();

  const texts = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.footerSection : data.allJsonJson.nodes[0].es.footerSection;

  return (
    <BackgroundWrapper>
      <Container component="footer">
        <StyledFooterWrapper component="footer">
          <LogoContainer xs={12} md={3}>
            <Link to="/">
              <StaticImage
                src="../images/rentmote-logotipo-white.png"
                alt=''
                width={120}
              />
            </Link>
          </LogoContainer>
          <LinksContainer xs={12} md={3}>
            <div>
              {
                texts.infoLinks.map((link: any, index: number) => (
                  <Fragment key={link.url.concat(index.toString())}>
                    <StyledLink to={link.url} >{link.text}</StyledLink>
                    <br/>
                  </Fragment>
                ))
              }
            </div>
          </LinksContainer>
          <SocialContainer xs={12} md={3}>
            <SocialBox />
          </SocialContainer>
          <SocialContainer xs={12} md={3}>
            <StoreBox />
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
      </Container>
    </BackgroundWrapper>
  );
}