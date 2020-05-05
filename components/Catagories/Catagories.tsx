import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Iobject {
  category: string;
  description: string;
  images: string;
  make: string;
  model: string;
  price: number;
  sku: string;
}
interface Iprops {
  catagories: Iobject[];
}

export const Catagories: React.FC<Iprops> = ({ catagories }) => {
  const animation = useAnimation();
  const [catagoryRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-0px",
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      animation.start("enter");
    }
  }, [animation, inView]);

  return (
    <Section animate="animate" exit="exit">
      <motion.h2 variants={title} initial="initial" animate={animation}>
        Catagories
      </motion.h2>
      <CatagoryContainer
        initial="initial"
        animate={animation}
        ref={catagoryRef}
        variants={staggerContainer}
      >
        {catagories.map((catagory, id) => (
          <Link
            href={`/shop/[slug]`}
            passHref
            as={`/shop/${catagory.category}`}
            key={id}
          >
            <CatagoryCard
              key={id}
              variants={item}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
            >
              {catagory.category}
              <img
                src={catagory.images[0]}
                alt="catagory image"
                style={{
                  height: "40px",
                  objectFit: "contain",
                  marginTop: "20%",
                }}
              />
            </CatagoryCard>
          </Link>
        ))}
      </CatagoryContainer>
    </Section>
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
    font-size: 0.85em;
    border: none;
`;

const Section = styled(motion.section)`
  padding: 0 4%;
  margin: 20vh 0;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

let easing = [0.48, 0.15, 0.25, 0.96];

const staggerContainer = {
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

const item = {
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
};

const title = {
  initial: { opacity: 0, x: -100, transition: { duration: 0.6, ease: easing } },
  enter: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easing } },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
