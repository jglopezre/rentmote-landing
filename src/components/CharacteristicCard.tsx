import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { theme } from '@/styles';

type CharacteristicCardProps = {
  description: string,
  imageSrc: ImageDataLike
}

const Wrapper = styled(Row)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: ${({ theme }) => theme.border.radius.base};
`;

const StyledParagraph = styled.p`
  line-height: 1.7rem;
`;

const StyledTextContainer = styled.div`
  position: absolute;
  padding: 1rem 2rem;
  bottom: 0;
  right: 40%;
  color: ${({ theme }) => theme.colors.primary1};
  //border-color: ${({ theme }) => theme.colors.primary1};
  //border-width: 2px;
  //border-style: solid;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: ${({ theme }) => theme.border.radius.base};
  z-index: 3;
`
const ImageContainer = styled(Col)`
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 2;
`;

const BarsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  border-radius: 8px;
`;
const RotatedBar = styled.div`
  width: 35%;
  height: 13%;
  margin-left: -2rem;
  background-color: ${({ theme }) => theme.colors.primary2};
  margin-bottom: 3.5rem;
  transform: rotate(25deg);
`;

export const CharacteristicCard: React.FC<CharacteristicCardProps> = (props) => {
  const image = getImage(props.imageSrc);
  return (
    <Wrapper>
      <ImageContainer xs={12}>
        {
          image
            ? (
                <GatsbyImage
                  image={image}
                  alt=''
                />
              )
            : null
        }
      </ImageContainer>
      <BarsContainer>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <RotatedBar />
          )) 
        }
        
      </BarsContainer>
      <StyledTextContainer>
        <StyledParagraph>{props.description ?? ''}</StyledParagraph>
      </StyledTextContainer>
    </Wrapper>
  );
}