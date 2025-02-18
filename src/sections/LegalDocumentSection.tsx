import React, { useRef } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-grid-system';
import { useMarkDownContent } from '@/customHooks';

type LegalDocumentSectionProps = {
  documentType: string
}

const StyledDocument = styled.div`
  padding-bottom: 5rem;
  padding-top: 3rem;
  & h1 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.typography.fontSize.s1};
    margin-bottom: 4rem;
  }
`;

const StyledButtonContainer = styled(Col)`
  margin-bottom: 3rem;
  & button {
    background-color: ${({ theme }) => theme.colors.primary2};
    color: ${({ theme }) => theme.colors.light};
    padding: 0.5rem 3rem;
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.sm};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary1};
    }
  }
`;

export const LegalDocumentSection: React.FC<LegalDocumentSectionProps> = ({ documentType }) => {
  const markDownDocument = useMarkDownContent(documentType);
  const contentRef = useRef<HTMLDivElement>(null)
  
  return (
    <Container component="section">
      <Row>
        <Col xs={12}>
          <StyledDocument
            dangerouslySetInnerHTML={{ __html: markDownDocument}}
            ref={contentRef}  
          />
        </Col>
      </Row>
    </Container>
  );
}
