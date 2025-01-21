import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding-left: 1rem;
  padding-right: 1rem;
`

export const NavBar: React.FC = () => {
  return (
    <nav>
      <StyledLink to="">Quienes Somos</StyledLink>
      <StyledLink to="">Caracteristicas</StyledLink>
      <StyledLink to="">Contacto</StyledLink>
    </nav>
  )
}