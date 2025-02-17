import React, { useState } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import styled, { keyframes } from 'styled-components';
import { CircledNumber } from './CircledNumber';

type OperationDescriptionCardProps = {
  title: string,
  description: string,
  imageSrc: any
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
  line-height: 1.8rem;
  max-width: 350px;
  & h2 {
    font-weight: 400;
  }
`;

const StyledContentWrapper = styled(Row)<{$isHovered: boolean}>`
  position: absolute;
  top: ${(props) => props.$isHovered ? '40%' : '70%'};
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
    background-color: rgba(255, 255, 255, 0.8);
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
