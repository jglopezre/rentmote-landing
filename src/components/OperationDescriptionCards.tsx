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
  padding: 3rem;
  & h2, p {
    line-height: 1.8rem;
  }
`;

export const OperationDesciptionCard: React.FC<OperationDescriptionCardProps> = (props) => {
  const image = getImage(props.imageSrc);

  return (
    <CardWrapper xs={12} md={4} >
      <Row>
        <Col xs={3}>
          {props.value ? <CircledNumber value={props.value} /> : null}
        </Col>
        <Col xs={9}>
          {image ? <GatsbyImage image={image} alt="" /> : null}
        </Col>
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