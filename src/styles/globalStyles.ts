import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Lexend, Arial, sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary1};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  h1 {
    font-family: Lexend, Arial, sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    font-size: 3.5rem;
  }

  h2, h3, h4, h5, h6 {
    font-family: Lexend, Arial, sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  p, span { 
    font-family: Lexend, Arial, sans-serif;
  }
`;
