import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import styled from 'styled-components';
import { LoginButtonGroup, NavBar } from '@/components';

const StyledSectionWrapper = styled(Row)<{ $breakpoint: string }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
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

export const TopBarSection: React.FC = () => {
  const breakpoint = useScreenClass();

  return (
    <Container component="header">
      <StyledSectionWrapper justify="between" $breakpoint={breakpoint}>
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
    </Container>
  );
}

