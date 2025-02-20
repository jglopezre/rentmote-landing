import { MiniTextCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

type TextsProps = {
  title: string,
  description: string,
  pillText: string
}

const buttonTexts = {
  es: {
    owner: 'Propietarios',
    tenant: 'Inquilinos',
  },
  en: {
    owner: 'Owners',
    tenant: 'Tenants',
  },
};

enum ButtonOptions {
  OWNER = 'owner',
  TENANT = 'tenant',
}

const StyledSectionWrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.light2};
  border-radius: ${({ theme }) => theme.border.radius.base};
`;

const ButtonContainner = styled(Col)`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  column-gap: 2rem;
  `;

const StyledButton = styled.button<{$selected: boolean}>`
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary1};
  border-width: ${({ theme }) => theme.border.width.md};
  border-radius: ${({ theme }) => theme.border.radius.base};
  background-color: ${({ theme, $selected }) => $selected ? theme.colors.primary1 : theme.colors.light};
  color: ${({ theme, $selected }) => $selected ? theme.colors.light : theme.colors.primary1};
  padding: 1rem 3rem;
  width: 30%;
`

export const SelectableInfoCardsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SelectableInfoCardsSection {
      allJsonJson {
        nodes {
          en {
            selectableInfoCardSection {
              owner {
                description
                title
              }
              tenant {
                description
                title
              }
            }
          }
          es {
            selectableInfoCardSection {
              owner {
                description
                title
              }
              tenant {
                description
                title
              }
            }
          }
        }
      }
    }
  `);

  const [selectedOption, setSelectedOption] = useState(ButtonOptions.OWNER);
  const { userLanguage } = useUserLanguage();

  const texts: TextsProps[] = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.selectableInfoCardSection[selectedOption] : data.allJsonJson.nodes[0].en.selectableInfoCardSection[selectedOption];
  console.log(userLanguage)
  console.log(texts)
  return (
    <StyledSectionWrapper component="section">
      <Row>
        <ButtonContainner>
          <StyledButton
            type="button"
            onClick={() => setSelectedOption(ButtonOptions.OWNER)}
            $selected={selectedOption === ButtonOptions.OWNER}
          >
            {userLanguage === 'es' ? buttonTexts.es.owner : buttonTexts.en.owner }
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => setSelectedOption(ButtonOptions.TENANT)}
            $selected={selectedOption === ButtonOptions.TENANT}
          >
            {userLanguage === 'es' ? buttonTexts.es.tenant : buttonTexts.en.tenant }
          </StyledButton>
        </ButtonContainner>

      </Row>
      <Row>
        {
          texts.map((text, index) => (
            <Col xs={12} lg={4} key={index}>
              <MiniTextCard
                title={text.title}
                description={text.description}
              />
            </Col>
          ))
        }
      </Row>
    </StyledSectionWrapper>
  );
}