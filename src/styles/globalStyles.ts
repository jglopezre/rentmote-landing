import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Lexend, Arial, sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    transition: background-color, 0.3s;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono';
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};;
  }

  p, span {
    font-family: Lexend, Arial, sans-serif;
  }
`;
