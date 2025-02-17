import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import { useUserLanguage } from '@/customHooks';
import { FaqBox } from '@/components';
import styled from 'styled-components';

type Faq = {
  title: string
  description: string
}

type FaqSection = {
  section: string,
  questions: Faq[]
}

const TitleContainer = styled(Col)`
  margin-bottom: 3rem;
  text-align: center;
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
                section
                questions {
                  description
                  title
                }
              }
              title
            }
          }
          es {
            faqsSection {
              faqs {
                section
                questions {
                  description
                  title
                }
              }
              title
            }
          }
        }
      }
    }
  `);

  const userLanguaje = useUserLanguage();
  
  const texts = userLanguaje === 'es' ? data.allJsonJson.nodes[0].es.faqsSection : data.allJsonJson.nodes[0].en.faqsSection
  
  const title: string = texts.title;
  
  const faqs: FaqSection[] = texts.faqs
  
  const [selectedSection, setSelectedSection] = useState<string>(faqs[0].section);

  const questions = faqs.find((faqSection) => faqSection.section === selectedSection)?.questions;
  console.log(questions)

  return (
    <Container>
      <Row>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
      </Row>
      <Row>
        <Col>
          {
            faqs.map((faqSection) => (
              <button onClick={() => setSelectedSection(faqSection.section)}>
                {faqSection.section}
              </button>
            ))
          }
        </Col>
      </Row>
      <Row gutterWidth={48}>
        {
          questions?.map((question, index) => (
            <Col xs={12} lg={6}>
              <FaqBox
                key={question.title.slice(0,6).concat(index.toString())}
                title={question.title}
                description={question.description}
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