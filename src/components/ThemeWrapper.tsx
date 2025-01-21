import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '@/styles';
import { ReactSimpleComponentProps } from '@/custom-types';

export const ThemeWrapper: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};