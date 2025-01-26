import React from 'react';
import styled from 'styled-components';
import { TopBar } from '@/sections/TopBar';
import { Footer } from '@/sections/Footer';
import { ReactSimpleComponentProps } from '@/custom-types';
import { useScreenClass } from 'react-grid-system';

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  grid-template-columns: 100%;
  grid-template-areas: 
    "header-area"
    "body-area";
`;

const StyledHeaderBar = styled.div<{$breakpoint: string}>`
  grid-area: header-area;
  position: ${(props) => props.$breakpoint == 'xs' ? 'relative' : 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`
const StyledBodyArea = styled.div<{$breakpoint: string}>`
  grid-area: body-area;
  overflow-y: auto;
  margin-top: auto;
  padding-top: ${(props) => props.$breakpoint == 'xs' ? '0' : '95px'};
`;

const StyledFooterArea = styled.div`
  grid-area: footer-area;
`

const Layout: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  const breakpoint = useScreenClass();
  return (
    <StyledContainer>
      <StyledHeaderBar $breakpoint={breakpoint}>
        <TopBar />
      </StyledHeaderBar>
      <StyledBodyArea $breakpoint={breakpoint}>
        { children }
        <Footer />
      </StyledBodyArea>
    </StyledContainer>
  );
}

export default Layout;