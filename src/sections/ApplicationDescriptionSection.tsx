import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useUserLanguage } from '@/customHooks';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';


const StyledSectionWrapper = styled(Container)<{ $breakpoint: string }>`
  padding-top: 8rem;
  padding-bottom: 5rem;
  position: relative;
  //&::before {
  //  content: '';
  //  display: block;
  //  position: absolute;
  //  width: 200%;
  //  height: 100%;
  //  top: 0;
  //  left: -50%;
  //  background-color: ${({ theme }) => theme.colors.primary1};
  //}
`

const StyledTextCol = styled(Col)`
  // color: ${({ theme }) => theme.colors.light};
  text-align: center;
  padding-bottom: 4rem;
  & div {
    display: inline-block;
    width: 100%;
    max-width: 800px;
    & h1 {
      font-weight: 300;
      font-size: ${({ theme }) => theme.typography.fontSize.s2};
    }
    & p {
      max-width: inherit;
      word-wrap: break-word;
      font-size: ${({ theme }) => theme.typography.fontSize.s5};
    }
  }
`;

const ImageWrapper = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  
`;

export const ApplicationDescriptionSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AplicationDescription {
      allJsonJson {
        nodes {
          en {
            applicationDescription {
              description
              title
            }
          }
          es {
            applicationDescription {
              description
              title
            }
          }
        }
      }
    }
  `);

  const { userLanguage } = useUserLanguage();
  console.log(userLanguage)
  const texts = data.allJsonJson.nodes[0];
  const selectedTexts = texts[userLanguage].applicationDescription ?? texts['en'].applicationDescription;

  const breakpoint = useScreenClass();

  return (
    <StyledSectionWrapper component="section" id="application-description" $breakpoint={breakpoint}>
      <Row justify='center' align='center'>
        <StyledTextCol xs="content">
          <div>
            <h1>{selectedTexts.title}</h1>
            <p>{selectedTexts.description}</p>
          </div>
        </StyledTextCol>
        <ImageWrapper xs="content">
          <StaticImage
            src="../images/rentmote-screenshoot.png"
            alt="rentmote-screenshoot"
            placeholder="blurred"
            style={{ boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.2)'}}
          />
        </ImageWrapper>
      </Row>
    </StyledSectionWrapper>
  );
}