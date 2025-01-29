import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import { useUserLanguage } from '@/customHooks';
import { FaqBox } from '@/components';
import styled from 'styled-components';

type Faq = {
  title: string
  description: string
}

const TitleContainer = styled(Col)`
  margin-bottom: 3rem;
  & h1 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.typography.fontSize.s1};
  }
`;

export const FaqsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FaqsSection {
      allJsonJson {
        nodes {
          en {
            faqsSection {
              faqs {
                description
                title
              }
              title
            }
          }
          es {
            faqsSection {
              faqs {
                description
                title
              }
              title
            }
          }
        }
      }
    }
  `);

  const userLanguaje = useUserLanguage();

  const texts = userLanguaje === 'es' ? data.allJsonJson.nodes[0][userLanguaje].faqsSection : data.allJsonJson.nodes[0]['en'].faqsSection
  
  const title: string = texts.title;
  const faqs: Faq[] = texts.faqs
  
  return (
    <Container>
      <Row>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
      </Row>
      <Row gutterWidth={48}>
        {
          faqs.map((faq, index) => (
            <Col xs={12} lg={6}>
              <FaqBox
                key={faq.title.slice(0,6).concat(index.toString())}
                title={faq.title}
                description={faq.description}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

/* {
  texts.faqs.map((faq, index) => (
    <Col xs={12} lg={6}>
      <FaqBox
        key={faq.title.slice(0,6).concat(index)}
        title={faq.title}
        description={faq.description}
      />
    </Col>
  ))
} */