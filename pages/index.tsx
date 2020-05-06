import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
import { Catagories } from "../components/Catagories/Catagories";
import { getData } from "../lib/api";
import { ClipedDiv } from "../style";

interface Iobject {
  category: string;
  description: string;
  images: string;
  make: string;
  model: string;
  price: number;
  sku: string;
}

const Home = (props: any) => {
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
};

export async function getStaticProps() {
  const API = "https://hifi-corner.herokuapp.com/api/v1/products";
  const allData = await getData(API);

  return {
    props: {
      allData,
    },
  };
}

export default Home;
