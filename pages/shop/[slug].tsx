import React from "react";
import { getData } from "../../lib/api";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Iprops {
  allData: Iobject[];
}

interface Iobject {
  category: string;
  description: string;
  images: string;
  make: string;
  model: string;
  price: number;
  sku: string;
}

const Catagory: React.FC<Iprops> = ({ allData }) => {
  return (
    <motion.main
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] },
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {allData.map((item: Iobject, index: number) => {
        return (
          <div key={index}>
            <h2>{item.model}</h2>
            <Link href={`/`}>
              <a href="">Home</a>
            </Link>
          </div>
        );
      })}
    </motion.main>
  );
};

//@ts-ignore
export const getStaticProps = async ({ params: { slug } }) => {
  const API = `https://hifi-corner.herokuapp.com/api/v1/products?category=${slug}&minPrice=100&maxPrice=8000`;
  const allData = await getData(API);

  return {
    props: {
      allData,
    },
  };
};

export const getStaticPaths = async () => {
  const API = "https://hifi-corner.herokuapp.com/api/v1/products";
  const allData = await getData(API);

  const paths = allData.map((catagory: string) => {
    return {
      params: {
        //@ts-ignore
        slug: catagory.category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Catagory;
