import React from 'react';
import styled from 'styled-components';

type HorizontalInfoMinicardProps = {
  title: string,
  description: string,
}

const Wrapper = styled.div`
  padding: 3rem 4rem;
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.border.width.sm};
  border-bottom-color: ${({ theme }) => theme.colors.light3};
  & h2 {
    font-weight: 400;
  }

  & p {
    font-size: ${({ theme }) => theme.typography.fontSize.s6};
  }
`;

export const HorizontalInfoMinicard: React.FC<HorizontalInfoMinicardProps> = ({ title, description }) => {
  return (
    <Wrapper>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
}