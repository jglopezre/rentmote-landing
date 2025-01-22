import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useUserLanguage } from '@/customHooks';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';


const StyledSectionWrapper = styled(Row)`
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`

const TextsWrapper = styled(Col)`
  text-align: center;
`;

const UpperText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary2};
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 40%;
    bottom: -20px;
    width: 20%;
    height: 5px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary2}, ${({ theme }) => theme.colors.secondary1}, ${({ theme }) => theme.colors.secondary2});
    border-radius: 5px;
  }
`;

const LowerText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s4};
  color: ${({ theme }) => theme.colors.primary1};
`;

const ImageWrapper = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  
`;

export const ApplicationDescription: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      jsonJson {
        id
        es {
          title
          description
        }
        en {
          title
          description
        }
      }
    }
  `);

  const userLanguage = useUserLanguage();

  const texts = data.jsonJson[userLanguage] ?? data.jsonJson['en'];

  return (
    <StyledSectionWrapper component="section">
      <TextsWrapper xs={12}>
        <UpperText>{texts.title}</UpperText>
        <br />
        <LowerText>{texts.description}</LowerText>
      </TextsWrapper>
      <ImageWrapper xs={12}>
        <StaticImage
          src="../images/rentmote-screenshoot.png"
          alt="rentmote-screenshoot"
          placeholder="blurred"
          style={{ boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.2)'}}
      />
      </ImageWrapper>
    </StyledSectionWrapper>
  );
}