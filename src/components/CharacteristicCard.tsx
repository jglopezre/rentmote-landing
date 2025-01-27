import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';

type CharacteristicCardProps = {
  description: string,
  imageSrc: ImageDataLike
}

const Wrapper = styled(Row)`
  position: relative;
`;

const StyledParagraph = styled.p`
  line-height: 1.7rem;
`;

const StyledTextContainer = styled.div`
  position: absolute;
  padding: 1rem 2rem;
  bottom: -15px;
  left: 40%;
  color: ${({ theme }) => theme.colors.primary1};
  border-color: ${({ theme }) => theme.colors.primary1};
  border-width: 2px;
  border-style: solid;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 8px;
`
const ImageContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
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
                  style={{
                    borderRadius: '8px',
                  }}
                />
              )
            : null
        }
      </ImageContainer>
      <StyledTextContainer>
        <StyledParagraph>{props.description ?? ''}</StyledParagraph>
      </StyledTextContainer>
    </Wrapper>
  );
}