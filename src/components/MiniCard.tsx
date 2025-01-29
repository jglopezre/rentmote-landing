import { theme } from '@/styles';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

type MinicardProps = {
  title: string,
  description: string,
  imageSrc: ImageDataLike
}
const CardWrapper = styled.div`
  max-width: 310px;
  min-width: 285px;
  position: relative;
  border-radius: ${({ theme }) => theme.border.radius.base};
  position: relative;
  text-align: center;
  padding-bottom: 5rem;
  cursor: pointer;
  &:hover #text-container {
    transform: translate(-50%, -350px);
  }
  border-color: ${({ theme }) => theme.colors.primary1};
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.sm};
`;

const ImageContainer = styled.div`
  position: relative;
  &::before {
    transition: background-color 0.5s, backdrop-filter 0.5s;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    border-top-right-radius: ${({ theme }) => theme.border.radius.base};
    border-top-left-radius: ${({ theme }) => theme.border.radius.base};
  }
  &:hover::before {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
  }
  
`

const StyledTextContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: 0.3s;
  margin: 0;
  padding: 0;
  & h2 {
    font-weight: 400;
  }
`
const onActionHandle = (type: string) => {
  alert(`Se esta tratando de ir a ${type}. Aún no está disponible esta opción`);
  console.log(`Se esta tratando de ir a ${type}`);
};

export const MiniCard: React.FC<MinicardProps> = ({ title, description, imageSrc}) => {
  const image = getImage(imageSrc);
  
  return (
    <CardWrapper onClick={() => onActionHandle(title)}>
      {
        image
        ? (
            <ImageContainer>
              <GatsbyImage
                image={image}
                alt={title}
                style={{
                  borderTopLeftRadius: theme.border.radius.base,
                  borderTopRightRadius: theme.border.radius.base,
                }}
              />
            </ImageContainer>
        )
        : null
      }
      <StyledTextContainer id="text-container">
        <h2>{title}</h2>
      </StyledTextContainer>
    </CardWrapper>
  );
}