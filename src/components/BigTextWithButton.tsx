import React from 'react';
import { useScreenClass } from 'react-grid-system';
import styled from 'styled-components';

type BigTextWithButtonProps = {
  text: string
  buttonText: string
  buttonAction: () => void
}

const StyledWrapper = styled.div<{ $breakpoint: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & div {
    font-size: ${({ theme }) => theme.typography.fontSize.s1};
    word-wrap: break-word;
    text-align: center;
    padding-left: ${({ $breakpoint }) => $breakpoint === 'xs' ? '0' : '3rem'};
    padding-right: ${({ $breakpoint }) => $breakpoint === 'xs' ? '0' : '3rem'};
  }
  & button {
    background-color: ${({ theme }) => theme.colors.primary1};
    padding: 0.9rem 4rem;
    color: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.border.radius.sm};
    border: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary2};
    }
  }
`;

export const BigTextWithButton: React.FC<BigTextWithButtonProps> = ({ text, buttonText, buttonAction }) => {
  const breakpoint = useScreenClass();

  return (
    <StyledWrapper
      $breakpoint={breakpoint}
    >
      <div>
        <p>{text}</p>
      </div>
        <button
          type="button"
          onClick={() => buttonAction()}
        >
          {buttonText}
        </button>
    </StyledWrapper>
  )
}