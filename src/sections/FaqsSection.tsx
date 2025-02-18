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
  questions: Faq[],
}

const TitleContainer = styled(Col)`
  margin-bottom: 3rem;
  text-align: center;
  & h1 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.typography.fontSize.s1};
  }
`;

const StyledButtonContainer = styled(Col)<{ $value: string, $selected:string }>`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  & > button {
    background-color: ${({ theme, $value, $selected }) => $value === $selected ? theme.colors.primary1 : theme.colors.light};
    color: ${({ theme, $value, $selected }) => $value === $selected ? theme.colors.light : theme.colors.primary1};
    border-radius: ${({ theme }) => theme.border.radius.base};
    padding: 1rem 3rem;
    border-style: solid;
    border-width: ${({ theme }) => theme.border.width.md};
    border-color: ${({ theme }) => theme.colors.primary1};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary1};
      color: ${({ theme }) => theme.colors.light};
    }
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

  return (
    <Container component="section">
      <Row>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
      </Row>
      <Row justify="center">
        {
          faqs.map((faqSection, index) => (
            <StyledButtonContainer $value={faqSection.section} $selected={selectedSection} key={faqSection.section.concat(index.toString())}>
              <button
                type="button"
                onClick={() => setSelectedSection(faqSection.section)}
              >
                {faqSection.section}
              </button>
            </StyledButtonContainer>
          ))
        }
      </Row>
      <Row gutterWidth={48}>
        {
          questions?.map((question, index) => (
            <Col xs={12} lg={6} key={question.title.slice(0,6).concat(index.toString())}>
              <FaqBox
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
