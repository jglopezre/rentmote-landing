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
`;

const StyledTextArea = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.s1};
  font-family: Lexend, Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.primary2};
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

  const breakpoint = useScreenClass();
  
  return (
    <StyledSectionWrapper $breakpoint={breakpoint}>
      <StyledTextArea xs={12}>
        <StyledTitle>{texts.textA}</StyledTitle>
        <br />
        <StyledParagraph>{texts.textB}</StyledParagraph>
      </StyledTextArea>
      <Col xs={12}>
        <p>{texts.textC}</p>
      </Col>
      <Col xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
        <CountdownTimer targetTime="2025-04-01T00:00:00Z"/>
      </Col>
    </StyledSectionWrapper>
  )
}