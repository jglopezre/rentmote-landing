import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StoreBox: React.FC = () => {
  return (
    <Wrapper>
      <a href="#">
        <StaticImage
          src="../images/appstore-white-store-logo.png"
          alt="apple appstore link logo"
          width={98}
        />
      </a>
      <a href="#">
        <StaticImage
          src="../images/playstore-white-store-logo.png"
          alt="google play link logo"
          width={98}
        />
      </a>
    </Wrapper>
  )
}