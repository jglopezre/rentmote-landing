import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary1};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary1};
  }
  &:hover::before {
    content: '';
    display: box;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary1};
    left: 0;
    bottom: -5px;
  }
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