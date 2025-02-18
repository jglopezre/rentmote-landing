import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { CountdownTimer } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { StaticImage } from 'gatsby-plugin-image';

const StyledSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    z-index: 1;
  }
`;

const StyledContentWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70%;
  bottom: 30%;
  left: 0;
  z-index: 2;
  
`;

const StyledParagraph = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.s3};
  font-family: Lexend Arial, Helvetica, sans-serif;
`;

export const SignUpProvitionalSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SignUpProvitional {
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

  const { userLanguage } = useUserLanguage();
  const texts = data.allJsonJson.nodes[0][userLanguage].heroContent ?? data.allJsonJson.nodes[0]['en'].heroContent;
  const breakpoint = useScreenClass();
  console.log(breakpoint);
  return (
    <StyledSectionWrapper>
      {
        breakpoint === 'xs' || breakpoint === 'md'
        ? null
        : (
            <StaticImage
              src='../images/rentmote-woman.jpg'
              objectFit="cover"
              alt=""
            />
        )
      }
      <StyledContentWrapper>
        <StaticImage
          src="../images/rentmote-logotipo-color.png"
          alt="rentmote logotipo"
          width={400}
          placeholder="blurred"
          style={{ marginBottom: '2rem' }}
        />
        <div style={{marginBottom: '2em'}}>
          <StyledParagraph>{texts.textC}</StyledParagraph>
        </div>
        <CountdownTimer targetTime="2025-04-01T00:00:00Z"/>
      </StyledContentWrapper>
    </StyledSectionWrapper>
  );
};