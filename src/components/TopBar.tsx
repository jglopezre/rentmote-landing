import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { LoginButtonGroup } from "./LoginButtonGroup";
import { NavBar } from "./Navbar";

const StyledSectionWrapper = styled(Row)`
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`
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
  return (
    <StyledSectionWrapper justify="between" component="header">
      <Col xs="content">
        <StaticImage
          src="../images/rentmote-logotipo-color.png"
          width={120}
          alt="rentmote"  
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