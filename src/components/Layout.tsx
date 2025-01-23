import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';
import { TopBar } from './TopBar';
import { Footer } from '../sections/Footer';
import { ReactSimpleComponentProps } from '@/custom-types';


const StyledContainer = styled(Container)`
  min-height: 100vh;
`

const Layout: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  return (
    <Container component="main">
      <TopBar />
      { children }
      <Footer />
    </Container>
  );
}

export default Layout;