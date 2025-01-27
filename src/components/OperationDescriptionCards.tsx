import React, { useState } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled, { keyframes } from 'styled-components';
import { CircledNumber } from './CircledNumber';

type OperationDescriptionCardProps = {
  title: string,
  description: string,
  imageSrc: ImageDataLike
  value?: number
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  margin-bottom: 1rem;
  & h2, p {
    line-height: 1.8rem;
  }
`;

const StyledContentWrapper = styled(Row)<{$isHovered: boolean}>`
  position: absolute;
  top: ${(props) => props.$isHovered ? '50%' : '73%'};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  padding-bottom: 8rem;
  overflow: hidden;
  z-index: 10;
  transition: top 0.3s;

  &::before {
    content: '';
    display: box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

export const OperationDesciptionCard: React.FC<OperationDescriptionCardProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const image = getImage(props.imageSrc);

  return (
    <CardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {
        image
          ? (
              <GatsbyImage
                image={image}
                alt=""
                style={{borderRadius: '8px'}}
              />
            )
          : null
      }
      <StyledContentWrapper $isHovered={isHovered}>
        <Col>
          {props.value ? <CircledNumber value={props.value} /> : null}
        </Col>
        <Col xs={12}>
          <h2>{props.title}</h2>
        </Col>
        <Col xs={12}>
          <p>{props.description}</p>
        </Col>
      </StyledContentWrapper>

      </CardWrapper>
  );
}

/*
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
*/