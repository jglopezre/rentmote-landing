import React from 'react';
import styled from 'styled-components';

type MiniTextCardProps = {
  title: string
  description: string
  pillText?: string
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 3rem;
  & p {
    line-height: 1.8rem;
  }
`;

const Pill = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary2};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 50px;
  padding: 0.8rem 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const MiniTextCard: React.FC<MiniTextCardProps> = ({ title, description, pillText }) => {
  return (
    <CardWrapper>
      {
        pillText && (
          <Pill>
            {pillText}
          </Pill>
        )
      }
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardWrapper>
  );
}
