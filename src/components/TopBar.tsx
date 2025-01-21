import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { LoginButtonGroup } from "./LoginButtonGroup";
import { NavBar } from "./Navbar";

const StyledRow = styled(Row)`
  padding-top: ${({ theme }) => theme.spacing.sm };
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const StyledCol1 = styled(Col)`
  
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
  return (
    <StyledRow justify="between">
      <StyledCol1>
        <StaticImage
          src="../images/rentmote-logotipo-color.png"
          width={120}
          alt="rentmote"  
        />
      </StyledCol1>
      <StyledCol2>
        <NavBar />
      </StyledCol2>
      <StyledCol3>
        <LoginButtonGroup />
      </StyledCol3>
    </StyledRow>
  );
}