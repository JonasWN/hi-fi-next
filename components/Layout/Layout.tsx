import React from "react";
import Head from "next/head";
const title = "Hi-Fi Corner";

interface Iprops {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<Iprops> = ({ children, home }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <div>header</div>
      <main>{children}</main>
      <footer>footer</footer>
    </React.Fragment>
  );
};

export default Layout;
