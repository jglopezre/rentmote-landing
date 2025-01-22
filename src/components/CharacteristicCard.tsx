import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';

type CharacteristicCardProps = {
  title: string,
  description: string,
  imageSrc: ImageDataLike
}

const Wrapper = styled.div`
  min-height: 265px;
  background: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  padding: 1.6rem 2rem;
  margin: ${({ theme }) => theme.spacing.md};
`;

const StyledParagraph = styled.p`
  line-height: 1.7rem;
`;

export const CharacteristicCard: React.FC<CharacteristicCardProps> = (props) => {
  const image = getImage(props.imageSrc);
  return (
    <Col xs={12} md={6}>
      <Wrapper>
        <Row>
          <Col>
            {image ? <GatsbyImage image={image} alt='' /> : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{props.title ?? ''}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledParagraph>{props.description ?? ''}</StyledParagraph>
          </Col>
        </Row>
      </Wrapper>
    </Col>
  );
}