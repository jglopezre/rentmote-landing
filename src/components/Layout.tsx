import React from 'react';
import { useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { FooterSection, TopBarSection } from '@/sections';
import { ReactSimpleComponentProps } from '@/custom-types';

const StyledHeaderBar = styled.div<{$breakpoint: string}>`
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  position: ${(props) => props.$breakpoint == 'xs' ? 'relative' : 'fixed'};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`
const StyledBodyArea = styled.div<{$breakpoint: string}>`
  margin-top: auto;
  padding-top: ${(props) => props.$breakpoint == 'xs' ? '0' : '78px'};
`;

export const Layout: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  const breakpoint = useScreenClass();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 0.5}}
    >
      <StyledHeaderBar $breakpoint={breakpoint}>
        <TopBarSection />
      </StyledHeaderBar>
      <StyledBodyArea $breakpoint={breakpoint}>
        <main style={{ minHeight: '100vh' }}>
          { children }
        </main>
        <FooterSection />
      </StyledBodyArea>
    </motion.div>
  );
}
