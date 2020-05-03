import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { Fonts, GlobalStyle } from "./GlobalStyleSheet";
import Header from "./Header";
import Footer from "./Footer";

interface Iprops {
  children: React.ReactNode;
  home?: boolean;
}

const title = "Hi-Fi Corner";
const Theme = {
  lightmode: {
    background: "#e9eef3;",
    colors: {
      normal: "#0e1115;",
      highlight: "#ffe398;",
    },
  },
  darkMode: {
    background: "#0e1115;",
    colors: {
      normal: "#e9eef3;",
      highlight: "#ffe398;",
    },
  },
};

const Layout: React.FC<Iprops> = ({ children, home }) => {
  useEffect(() => {
    Fonts();
  }, []);

  return (
    <ThemeProvider theme={Theme.lightmode}>
      <GlobalStyle />
      <Head>
        <link rel="i  con" href="/favicon.ico" />
        <meta name="description" content="Hi-Fi Corner Next.js" />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <Header />
      <React.Fragment>{children}</React.Fragment>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;
