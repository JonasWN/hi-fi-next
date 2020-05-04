import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Catagories from "../components/Catagories/Catagories";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] },
      }}
    >
      <motion.header exit={{ opacity: 0 }}>
        <img src="/images/hero.jpg" alt="hero img" />

        <div style={{ position: "relative", height: "150px" }}>
          <ClipedDiv></ClipedDiv>
        </div>
      </motion.header>
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
