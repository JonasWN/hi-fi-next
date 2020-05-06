import React from "react";
import { getData } from "../../lib/api";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heading, LinksContainer } from "../../style/shop";

interface Iprops {
  products: Iobject[];
  links: string[];
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

const Shop: React.FC<Iprops> = ({ products, links }) => {
  return (
    <motion.main
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] },
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading>Shop</Heading>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <LinksContainer size={"40%"}>
        {links.map((link: string, index: number) => {
          return (
            <Link
              href={`/shop/[slug]`}
              as={`/shop/${link}`}
              passHref
              key={index}
            >
              <li>
                <a>{link}</a>
              </li>
            </Link>
          );
        })}
      </LinksContainer>
      <LinksContainer size={"200px"}>
        {products.map((item: Iobject, index: number) => {
          return (
            <Link
              href="/product/[slug]"
              as={`/product/${item.sku}`}
              key={index}
            >
              <div key={index}>
                <h2>{item.model}</h2>
                <img
                  src={item.images[0]}
                  alt="product img"
                  style={{
                    width: "180px",
                    height: "auto",
                    objectFit: "contain",
                    border: "1px solid #888",
                  }}
                />
              </div>
            </Link>
          );
        })}
      </LinksContainer>
    </motion.main>
  );
};

//@ts-ignore
export const getStaticProps = async ({ params: { slug } }) => {
  const CATAGORY = `https://hifi-corner.herokuapp.com/api/v1/products?category=${slug}&minPrice=100&maxPrice=8000`;
  const PRODUCTS = "https://hifi-corner.herokuapp.com/api/v1/products";
  const [products, Catagories] = await Promise.all([
    getData(CATAGORY),
    getData(PRODUCTS),
  ]);

  const catagories: Iobject[] = Catagories.filter(
    (item: Iobject, index: number, list: object[]) =>
      index === list.findIndex((obj: any) => obj.category === item.category)
  );

  const links = catagories.map((item: Iobject) => item.category);

  return {
    props: {
      products,
      links,
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
        slug: catagory.category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Shop;
