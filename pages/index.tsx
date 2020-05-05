import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
import { Catagories } from "../components/Catagories/Catagories";
import { getData } from "../lib/api";

interface Iobject {
  category: string;
  description: string;
  images: string;
  make: string;
  model: string;
  price: number;
  sku: string;
}

export default function Home(props: any) {
  const catagories: Iobject[] = props.allData.filter(
    (item: Iobject, index: number, list: object[]) =>
      index === list.findIndex((obj: any) => obj.category === item.category)
  );

  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] },
      }}
    >
      <motion.header
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src="/images/hero.jpg" alt="hero img" />

        <div style={{ position: "relative", height: "150px" }}>
          <ClipedDiv></ClipedDiv>
        </div>
      </motion.header>
      <main></main>
      <Catagories catagories={catagories} />
    </motion.div>
  );
}

export async function getStaticProps() {
  const API = "https://hifi-corner.herokuapp.com/api/v1/products";
  const allData = await getData(API);

  return {
    props: {
      allData,
    },
  };
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
