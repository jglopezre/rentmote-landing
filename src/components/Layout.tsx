import { ReactSimpleComponentProps } from "@/custom-types";
import React from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";


const StyledContainer = styled(Container)`
  min-height: 100vh;
`

const Layout: React.FC<ReactSimpleComponentProps> = ({ children }) => {
  return (
    <StyledContainer component="main">
      <TopBar />
      { children }
      <Footer />
    </StyledContainer>
  );
}

export default Layout;