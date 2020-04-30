import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, Fonts } from "./GlobalStyle";
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
      normal: "#0a0b0c;",
      highlight: "#ffe398;",
    },
  },
  darkMode: {
    background: "#333;",
    colors: {
      normal: "#e9eef3;",
      highlight: "#ffe398;",
    },
  },
};

const Layout: React.FC<Iprops> = ({ children, home }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? setIsDarkMode(true)
  //       : setIsDarkMode(false);
  //   }
  // }, []);

  const Main = styled.main`
    width: 100%;
  `;

  useEffect(() => {
    Fonts();
  }, []);

  return (
    <ThemeProvider theme={!isDarkMode ? Theme.lightmode : Theme.darkMode}>
      <GlobalStyle />
      <Head>
        <link rel="i  con" href="/favicon.ico" />
        <meta name="description" content="Hi-Fi Corner Next.js" />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
