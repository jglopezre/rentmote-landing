import React from 'react';
import styled from 'styled-components';

type CircledNumberProps = {
  value: number
}

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary2};
  text-align: center;
`

const Digit = styled.span`
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.s3};
`

export const CircledNumber: React.FC<CircledNumberProps> = ({ value }) => {
  return (
    <Circle>
      <Digit>{value}</Digit>
    </Circle>
  );
}
