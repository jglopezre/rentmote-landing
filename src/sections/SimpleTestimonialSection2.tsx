import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { SimpleTextWithPicture } from '@/components';
import { useUserLanguage } from '@/customHooks';

const StyledSectionWrapper = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing.section};
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

const ComponentContainer = styled(Col)`
  background-color: ${({ theme }) => theme.colors.primary1};
  padding: 3rem;
  color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.border.radius.base};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const SimpleTestimonialSection2: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SimpleTestimonialSection2 {
      allJsonJson {
        nodes {
          en {
            simpleTestimonialSection2 {
              image
              text
            }
          }
          es {
            simpleTestimonialSection2 {
              image
              text
            }
          }
        }
      }
      allFile {
        nodes {
          name
          childImageSharp {
            id
            gatsbyImageData(height: 550, width: 550 ,placeholder: BLURRED, transformOptions: {fit: COVER})
          }
        }
      }
    }  
  `);

  const { userLanguage } = useUserLanguage();
  const texts = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.simpleTestimonialSection2 : data.allJsonJson.nodes[0].es.simpleTestimonialSection2;
  console.log(texts)
  const picture = data.allFile.nodes.find((node: any) => node.name === texts.image);

  return (
    <StyledSectionWrapper component="section">
      <Row>
        <ComponentContainer>
          <SimpleTextWithPicture
            text={texts.text}
            imageSrc={picture}
          />
        </ComponentContainer>
      </Row>
    </StyledSectionWrapper>
  )
}