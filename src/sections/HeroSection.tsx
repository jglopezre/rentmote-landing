import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { CountdownTimer } from '@/components';
import { useUserLanguage } from '@/customHooks';

const StyledSectionWrapper = styled(Row)<{$breakpoint: string}>`
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  &::after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) ,rgba(255, 255, 255, 1)); 
    pointer-events: none;
  }
`;

const StyledTextArea = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.s1};
  font-family: Lexend, Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.light};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s4};
  max-width: 60%;
`

export const HeroSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HeroSection {
      allJsonJson {
        nodes {
          en {
            heroContent {
              textA
              textB
              textC
            }
          }
          es {
            heroContent {
              textA
              textB
              textC
            }
          }
        }
      }
    }
  
  `);

  const userLanguage = useUserLanguage();
  const texts = data.allJsonJson.nodes[0][userLanguage].heroContent ?? data.allJsonJson.nodes[0]['en'].heroContent;

  console.log(texts);
  const breakpoint = useScreenClass();
  
  return (
    <StyledSectionWrapper $breakpoint={breakpoint}>
      <video
        src="/videos/rentmote-herovideo.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <StyledTextArea xs={12}>
        <StyledTitle>{texts.textA}</StyledTitle>
        <br />
        <StyledParagraph>{texts.textB}</StyledParagraph>
      </StyledTextArea>
    </StyledSectionWrapper>
  )
}