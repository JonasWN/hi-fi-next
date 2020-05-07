import React from "react";
import { getData } from "../../utils/api";
import { motion } from "framer-motion";
import { ClipedDiv } from "../../style/index";

interface Iprops {
  product: Iobject;
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

const Product: React.FC<Iprops> = ({ product }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header
        style={{
          width: "100%",
          height: "35vh",
          background: "#000",
        }}
      ></header>
      <div
        style={{
          position: "relative",
        }}
      >
        <ClipedDiv />
      </div>
      <main
        style={{
          marginTop: "20vh",
          margin: "130px auto 0 auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{product.model}</h1>
        <img
          src={product.images[0]}
          alt="product-img"
          style={{
            width: "80vw",
            height: "180px",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
      </main>
    </motion.div>
  );
};

//@ts-ignore
export const getStaticProps = async ({ params: { slug } }) => {
  const product = await getData(
    `https://hifi-corner.herokuapp.com/api/v1/products/${slug}`
  );

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const API = "https://hifi-corner.herokuapp.com/api/v1/products";
  const allData = await getData(API);

  // Remove Duplicated Catagories
  const catagories: Iobject[] = allData.filter(
    (item: Iobject, index: number, list: object[]) =>
      index === list.findIndex((obj: any) => obj.category === item.category)
  );

  const paths = catagories.map((catagory: Iobject) => {
    return {
      params: {
        slug: catagory.sku,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Product;
