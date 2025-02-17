import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { motion, Variants } from 'motion/react';
import { VerticalInfoBigCard } from '@/components';
import { useUserLanguage } from '@/customHooks';
import { useInView } from 'react-intersection-observer';


// Styles

const StyledContainerSection = styled(Container)`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.section};
  padding-bottom: ${({ theme }) => theme.spacing.section};
`;

const StyledTitle = styled(Col)`
  text-align: center;
  padding-bottom: 4rem;
  & div {
    display: inline-block;
    width: 100%;
    max-width: 700px;
    & h1 {
      position: relative;
      font-weight: 400;
      font-size: ${({ theme }) => theme.typography.fontSize.s2};
    }
    & p {
      max-width: inherit;
      word-wrap: break-word;
      font-size: ${({ theme }) => theme.typography.fontSize.s5};
    }
  }
`;

const CardRowContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 64px;
`;

// Animations
const containerVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    }
  }
};

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    }
  }
}

export const BigInfoSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BigInfoSection {
      allJsonJson {
        nodes {
          en {
            bigInfoSection {
              cards {
                description
                image
                title
                url {
                  to
                  text
                }
              }
              description
              title
            }
          }
          es {
            bigInfoSection {
              cards {
                description
                image
                title
                url {
                  to
                  text
                }
              }
              description
              title
            }
          }
        }
      }
      allFile(filter: {name: {regex: "/-information-section$/"}}) {
        nodes {
          childImageSharp {
            id
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
          name
        }
      }
    }  
  `);
  const userLanguage = useUserLanguage();
  
  const [containerRef, isInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })


  const content = userLanguage === 'es' ? data.allJsonJson.nodes[0].es.bigInfoSection : data.allJsonJson.nodes[0].en.bigInfoSection;
  const cards: any[] = content.cards;
  
  return (
    <StyledContainerSection component="section">
      <Row>
        <StyledTitle>
          <div>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </StyledTitle>
      </Row>
      <Row>
        <Col>
            <CardRowContainer
              variants={containerVariants}
              initial="offscreen"
              animate={isInView ? 'onscreen' : 'offscreen'}
              ref={containerRef}
            >
              {
                cards.map((card) => {
                  const gatsbyImage = data.allFile.nodes.find((image: any) => image.name === card.image)
                  return (
                    <motion.div
                      key={gatsbyImage.id}
                      variants={cardVariants}
                      style={{ alignSelf: 'stretch' }}
                    >
                      <VerticalInfoBigCard
                        title={card.title}
                        description={card.description}
                        imageSrc={gatsbyImage}
                        url={card.url}
                      />
                    </motion.div>
                  )
                })  
              }
            </CardRowContainer>
        </Col>
      </Row>
    </StyledContainerSection>
  );
}