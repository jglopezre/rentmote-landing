import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

// Estilos con styled-components
const StickyContainer = styled.div`
  position: sticky;
  top: 78px;
  height: 100vh; /* Ocupa toda la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
`;

const AnimatedBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 10px;
`;

const Content = styled.div`
  height: 200vh; /* Espacio antes y después del sticky container */
  background-color: #ffffff;
`;

const StickyScrollAnimation = () => {
  const { scrollYProgress } = useScroll(); // Obtiene el progreso del scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]); // Escala basada en el scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotación basada en el scroll

  return (
    <section>
      <StickyContainer>
        <AnimatedBox style={{ scale, rotate }} />
      </StickyContainer>
      <Content />
    </section>
  );
};

export default StickyScrollAnimation;