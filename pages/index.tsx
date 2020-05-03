import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Catagories from "../components/Catagories/Catagories";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        x: "-100vw",
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.4 },
      }}
    >
      <header>
        <img src="/images/hero.jpg" alt="hero img" />
      </header>
      <div style={{ position: "relative", height: "150px" }}>
        <ClipedDiv></ClipedDiv>
      </div>
      <main></main>
      <Catagories />
    </motion.div>
  );
}

const ClipedDiv = styled.div`
  height: 150px;
  width: 100%;
  background: #000000;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  position: absolute;
  top: -1px;
  left: 0;
`;

const HeadingFirst = styled(motion.h1)`
  position: absolute;
  left: 25px;
  top: -20px;
  color: ${(props) => props.theme.background};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: monospace;  
  font-size: 1.5em;
  }
`;

const HeadingSecond = styled(motion.h1)`
  position: absolute;
  right: 25px;
  bottom: -20px;
  color: ${(props) => props.theme.colors.normal};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: monospace;
  font-size: 1.5em;
  }
`;
