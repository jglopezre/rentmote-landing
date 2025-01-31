/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import 'normalize.css';
import { ScreenClassProvider } from 'react-grid-system';
import { ThemeWrapper, Layout } from '@/components';

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeWrapper>
    <ScreenClassProvider>
      <Layout>
        {element}
      </Layout>
    </ScreenClassProvider>
  </ThemeWrapper>
);
