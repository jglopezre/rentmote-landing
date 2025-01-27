import { useUserLanguage } from "@/customHooks";
import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

const texts = {
  en: {
    login: 'Login',
    signup: 'Sign Up'
  },
  es: {
    login: 'Entrar',
    signup: 'Registrarse'
  }
}

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
  const userLanguage = useUserLanguage();

  const onLoginActionHandle = () => {
    if(typeof window === 'undefined') {
      console.error('window no es accesible en el entorno actual')
      return
    } 
    console.log('Login button pressed');
    window.open('https://hexeros.in/dev/rentmote/admin');
  }
  
  const onSignupActionHandle = () => {
    navigate('/signUp');
  }

  return (
    <ButtonWrapper>
      <LoginButon type="button" onClick={onLoginActionHandle}>
        {userLanguage === 'es' ? texts.es.login : texts.en.login}
      </LoginButon>
      <SignupButton type="button" onClick={onSignupActionHandle}>
        {userLanguage === 'es' ? texts.es.signup : texts.en.signup}
      </SignupButton>
    </ButtonWrapper>
  );
}
