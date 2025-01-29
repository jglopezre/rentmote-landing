import React from 'react';
import styled from 'styled-components';

type FaqBoxProps = {
  title: string,
  description: string,
};

const StyrledWrapper = styled.div`
  width: 100%;
  border-bottom-style: ${({ theme }) => theme.border.style.solid};
  border-bottom-width: ${({ theme }) => theme.border.width.md};
  border-bottom-color: ${({ theme }) => theme.colors.primary1};
  margin-bottom: 3rem;
`

export const FaqBox: React.FC<FaqBoxProps> = ({ title, description }) => {
  return (
    <StyrledWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
    </StyrledWrapper>
  );
}