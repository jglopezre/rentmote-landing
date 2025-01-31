/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import 'normalize.css';
import { Layout, ThemeWrapper } from '@/components';
import { ScreenClassProvider } from 'react-grid-system';

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeWrapper>
    <ScreenClassProvider>
      <Layout>
        {element}
      </Layout>
    </ScreenClassProvider>
  </ThemeWrapper>
);
