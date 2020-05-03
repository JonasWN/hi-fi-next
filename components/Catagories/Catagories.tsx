import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Catagories: React.FC = () => {
  const [catagories, setCatagories] = useState([
    {
      title: "speakers",
      id: 1,
    },
    {
      title: "CD",
      id: 2,
    },
    {
      title: "turntables",
      id: 3,
    },
    {
      title: "Phones",
      id: 4,
    },
  ]);

  const animation = useAnimation();
  const [catagoryRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-0px",
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [animation, inView]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Section>
        <motion.h2 variants={title} initial="hidden" animate={animation}>
          Catagories
        </motion.h2>
        <CatagoryContainer
          animate={animation}
          ref={catagoryRef}
          variants={container}
          initial="hidden"
          exit={{ y: -50, opacity: 0 }}
          key={2}
        >
          {catagories.map((catagory, id) => (
            <Link href="/shop" key={id}>
              <CatagoryCard
                key={id}
                variants={item}
                exit={{ opacity: 0, x: -50 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                {catagory.title}
              </CatagoryCard>
            </Link>
          ))}
        </CatagoryContainer>
      </Section>
    </AnimatePresence>
  );
};

const CatagoryContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  justify-items: center;
  grid-gap: 20px 0;
  width: 100%;
`;

const CatagoryCard = styled(motion.button)`
    background: ${(props) => props.theme.colors.normal}
    color: ${(props) => props.theme.background}
    border: none;
    width: 40vw;
    height: 30vh;
    max-width: 400px;
    font-family: Oswald;
`;

const Section = styled(motion.section)`
  padding: 0 4%;
  margin: 20vh 0;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  whileHover: { scale: 1.1 },
};

const title = {
  hidden: { opacity: 0, x: -100, transition: { duration: 0.6, ease: easing } },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easing } },
};

export default Catagories;
