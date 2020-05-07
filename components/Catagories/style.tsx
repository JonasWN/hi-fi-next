import styled from "styled-components";
import { motion } from "framer-motion";

export const CatagoryContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  justify-items: center;
  grid-gap: 20px 0;
  width: 100%;
`;

export const CatagoryCard = styled(motion.button)`
    background: ${(props) => props.theme.colors.normal}
    color: ${(props) => props.theme.background}
    border: none;
    width: 40vw;
    height: 30vh;
    max-width: 400px;
    font-family: Oswald;
    font-size: 0.85em;
    border: none;
`;
export const Section = styled(motion.section)`
  padding: 0 4%;
  margin: 20vh 0;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

export let easing = [0.48, 0.15, 0.25, 0.96];

export const staggerContainer = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
  exit: { transition: { staggerChildren: 0.05 } },
};

export const item = {
  initial: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.9 },
};

export const title = {
  initial: { opacity: 0, x: -100, transition: { duration: 0.6, ease: easing } },
  enter: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easing } },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
