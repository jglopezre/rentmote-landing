import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { LoginButtonGroup } from '../components/LoginButtonGroup';
import { NavBar } from '../components/Navbar';

const StyledSectionWrapper = styled(Row)<{ $breakpoint: string }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
`;

const StyledCol2 = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCol3 = styled(Col)`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const TopBar: React.FC = () => {
  const breakpoint = useScreenClass();

  return (
    <StyledSectionWrapper justify="between" component="header" $breakpoint={breakpoint}>
      <Col xs="content">
        <StaticImage
          src="../images/rentmote-logotipo-color.png"
          width={120}
          alt="rentmote"
          placeholder="blurred"
        />
      </Col>
      <StyledCol2>
        <NavBar />
      </StyledCol2>
      <StyledCol3 xs="content">
        <LoginButtonGroup />
      </StyledCol3>
    </StyledSectionWrapper>
  );
}