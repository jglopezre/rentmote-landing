import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { theme } from '@/styles';

type SimpleTextWithPictureProps = {
  text: string,
  imageSrc: ImageDataLike;
}

const StyledTextContainer = styled(Col)`
  display: grid;
  place-items: center;
  & p {
    font-size: ${({ theme }) => theme.typography.fontSize.s4};
    line-height: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const SimpleTextWithPicture: React.FC<SimpleTextWithPictureProps> = ({ text, imageSrc }) => {
  const image = getImage(imageSrc);
  return (
    <Row>
      <StyledTextContainer xs={12} md={7}>
        <p><q>{text}</q></p>
      </StyledTextContainer>
      <Col xs={12} md={4} offset={{ md: 1 }}>
        {
          image
          ? (
              <GatsbyImage
                image={image}
                alt={imageSrc.name}
                style={{
                  borderRadius: theme.border.radius.base
                }}

              />
          )
          : null
        }
      </Col>
    </Row>
  )
}