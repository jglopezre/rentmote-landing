import React from 'react';
import { Col, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';

const StyledSectionWrapper = styled(Row)<{$breakpoint: string}>`
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
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
  const breakpoint = useScreenClass();
  return (
    <StyledSectionWrapper $breakpoint={breakpoint}>
      <Col xs={12}>
        <h1>Acá Va un Hero</h1>
      </Col>
    </StyledSectionWrapper>
  )
}