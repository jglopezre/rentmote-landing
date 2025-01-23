import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useUserLanguage } from '@/customHooks';

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
  const data = useStaticQuery(graphql`
    query NavBar {
      allJsonJson {
        nodes {
          en {
            navbar {
              to
              text
            }
          }
          es {
            navbar {
              text
              to
            }
          }
        }
      }
    }
  `);

  const userLanguage = useUserLanguage();

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = targetId ? document.querySelector(targetId) : undefined;
    console.log(targetElement)

    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  const texts = data.allJsonJson.nodes[0]; //[userLanguage].applicationDescription ?? data.allJsonJson.nodes['en'].applicationDescription;
  const selectedTexts: any[] = texts[userLanguage].navbar ?? texts['en'].navbar;

  return (
    <nav>
      {
        selectedTexts.map(( elem ) => (
            <StyledLink to={elem.to} onClick={handleScroll}>{elem.text}</StyledLink>    
        ))
      }
    </nav>
  )
}