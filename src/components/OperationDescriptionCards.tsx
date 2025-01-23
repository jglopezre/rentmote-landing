import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { CircledNumber } from './CircledNumber';

type OperationDescriptionCardProps = {
  title: string,
  description: string,
  imageSrc: ImageDataLike
  value?: number
}

const CardWrapper = styled(Col)`
  padding-top: 3rem;
  padding-bottom: 1rem;
  & h2, p {
    line-height: 1.8rem;
  }
`;

const ImageContainer = styled(Col)`
  display: flex;
  justify-content: center;
`

export const OperationDesciptionCard: React.FC<OperationDescriptionCardProps> = (props) => {
  const image = getImage(props.imageSrc);

  return (
    <CardWrapper xs={12} md={4}>
      <Row>
        <Col xs="content">
          {props.value ? <CircledNumber value={props.value} /> : null}
        </Col>
        <ImageContainer>
          {image ? <GatsbyImage image={image} alt="" /> : null}
        </ImageContainer>
      </Row>
      <Row>
        <Col>
          <h2>{props.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.description}</p>
        </Col>
      </Row>
    </CardWrapper>
  );
}