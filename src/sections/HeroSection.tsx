import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';

const StyledSectionWrapper = styled(Container)`
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ImageContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTextArea = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div {
    display: inline-block;
    width: 100%;
    max-width: 850px;
    text-align: center;
  }
  & h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.s1};
    font-family: Lexend, Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.primary1};
    font-weight: 400;
  }
  & p {
    font-size: ${({ theme }) => theme.typography.fontSize.s4};
    max-width: inherit;
    word-wrap: break-word;
  }
`;

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

  return (
    <StyledSectionWrapper component="section">
      <Row
        justify='center'
        align='center'
      >
        <ImageContainer xs={12}>
          <StaticImage
            src="../images/rentmote-logotipo-color.png"
            alt="rentmote-logo"
            width={300}
            placeholder="blurred"
            style={{ marginBottom: '2rem' }}
          />
        </ImageContainer>
        <StyledTextArea xs={12}>
          <div>
            <h1>{texts.textA}</h1>
            <p>{texts.textB}</p>
          </div>
        </StyledTextArea>
      </Row>
    </StyledSectionWrapper>
  )
}
