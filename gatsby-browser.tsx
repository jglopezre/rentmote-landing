/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import 'normalize.css';
import { Layout, ThemeWrapper } from '@/components';
import { ScreenClassProvider } from 'react-grid-system';
import { UserLanguageContextProvider } from '@/contexts/userLanguageContext';

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeWrapper>
    <ScreenClassProvider>
      <UserLanguageContextProvider>
        <Layout>
          {element}
        </Layout>
      </UserLanguageContextProvider>
    </ScreenClassProvider>
  </ThemeWrapper>
);
