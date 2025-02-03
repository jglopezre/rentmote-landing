import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { FooterSection, TopBarSection } from '@/sections';
import { ReactSimpleComponentProps } from '@/custom-types';
import { useScreenClass } from 'react-grid-system';

const StyledContainer = styled(motion.div)`
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
  padding-top: ${(props) => props.$breakpoint == 'xs' ? '0' : '78px'};
`;

export const Layout: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  const breakpoint = useScreenClass();
  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 0.5}}
    >
      <StyledHeaderBar $breakpoint={breakpoint}>
        <TopBarSection />
      </StyledHeaderBar>
      <StyledBodyArea $breakpoint={breakpoint}>
        { children }
        <FooterSection />
      </StyledBodyArea>
    </StyledContainer>
  );
}
