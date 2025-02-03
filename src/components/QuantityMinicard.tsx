import React from 'react';
import styled from 'styled-components';

type QuantityMiniCardProps = {
  title: string,
  description: string,
  quantity: number,
  unity?: 'k' | 'M',
}

const Wrapper = styled.div`
  max-width: 350px;
  padding: 3rem 2rem;
  & div {
    & h2 {
      font-size: ${({ theme }) => theme.typography.fontSize.s5};
    }
  }
`;

const StyledNumber = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s1};
  margin-top: 1.8rem;
  margin-bottom: 0;
`;

const StyledDscription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s6};
  line-height: 1.5rem;
`;

export const QuantityMiniCard: React.FC<QuantityMiniCardProps> = ({ title, description, quantity, unity }) => {
  return (
    <Wrapper>
      <div>
        <h2>{title}</h2>
        <StyledNumber>{`${quantity} ${unity ?? ''}`}</StyledNumber>
        <StyledDscription>{description}</StyledDscription>
      </div>
    </Wrapper>

  );
}