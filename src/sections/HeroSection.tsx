import React from 'react';
import { Col } from 'react-grid-system';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Col)`
  height: 80vh;
  position: relative;
  background: radial-gradient(${({ theme }) => theme.colors.primary2}, ${({ theme }) => theme.colors.primary1}, ${({ theme }) => theme.colors.primary1});
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 3rem;
`
export const HeroSection: React.FC = () => {
  return (
    <StyledSectionWrapper>
      <h1>Acá Va un Hero</h1>
    </StyledSectionWrapper>
  )
}