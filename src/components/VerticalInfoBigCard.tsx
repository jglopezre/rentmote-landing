import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

type VerticalInfoBigCardProps = {
  title: string,
  description: string,
  url: any,
  imageSrc: any,
}

const Wrapper = styled.div`
  max-width: 450px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.border.radius.lg};
  padding: 3rem;
`;

const ImageContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 3rem;
  position: relative;
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.border.width.sm};
  border-bottom-color: ${({ theme }) => theme.colors.light3};
`;

const TextContainer = styled.div`
  & h2 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.fontSize.s3};
  }
  & p {
    line-height: 2rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 400;

`;

export const VerticalInfoBigCard: React.FC<VerticalInfoBigCardProps> = ({ title, description, url, imageSrc }) => {
  const image = getImage(imageSrc);
  
  return (
    <Wrapper>
      <ImageContainer>
        {
          image && (
            <GatsbyImage
              image={image}
              alt={imageSrc.name}
            />  
          )
        }
      </ImageContainer>
      <TextContainer>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>
        <br />
        <StyledLink to={url.to}>{url.text}</StyledLink>
      </TextContainer>
    </Wrapper>
  );
}