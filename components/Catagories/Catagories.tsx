import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Section,
  CatagoryContainer,
  CatagoryCard,
  item,
  title,
  staggerContainer,
} from "./style";
const slugg = require("slug");

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
    <Section
      animate={animation}
      exit="exit"
      initial="initial"
      ref={catagoryRef}
    >
      <motion.h2 variants={title}>Catagories</motion.h2>
      <CatagoryContainer variants={staggerContainer}>
        {catagories.map((catagory, id) => (
          <Link
            href={`/shop/[slug]`}
            as={`/shop/${slugg(catagory.category)}`}
            key={id}
          >
            <CatagoryCard
              variants={item}
              whileHover="whileHover"
              whileTap="whileTap"
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
