import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { LoginButtonGroup } from '../components/LoginButtonGroup';
import { NavBar } from '../components/Navbar';
import { Link } from 'gatsby';

const StyledSectionWrapper = styled(Row)<{ $breakpoint: string }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding-left: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  padding-right: ${( props ) => (props.$breakpoint == 'md' || props.$breakpoint == 'xs') ? props.theme.spacing.smallLateral : props.theme.spacing.largeLateral};
  position: sticky;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
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
        <Link to="/">
          <StaticImage
            src="../images/rentmote-logotipo-black.png"
            width={90}
            alt="rentmote"
            placeholder="blurred"
          />
        </Link>
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