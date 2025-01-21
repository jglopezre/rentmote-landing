import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SignupButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 3rem 0.5rem 3rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1};
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary1};
  }
`;

const LoginButon = styled.button`
  color: ${({ theme }) => theme.colors.primary2};
  border: none;
  padding: 0.5rem 3rem 0.5rem 3rem;
  background: none;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary1};
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;


export const LoginButtonGroup: React.FC = () => {
  const onLoginActionHandle = () => {
    console.log('Login button pressed');
  }
  
  const onSignupActionHandle = () => {
    console.log('Sign Up Button pressed');
  }

  return (
    <ButtonWrapper>
      <LoginButon type="button" onClick={onLoginActionHandle}>
        Log in
      </LoginButon>
      <SignupButton type="button" onClick={onSignupActionHandle}>
        Sign up
      </SignupButton>
    </ButtonWrapper>
  )

}
