import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Fonts, GlobalStyle, Theme } from "./GlobalStyleSheet";

interface Iprops {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<Iprops> = ({ children }) => {
  useEffect(() => {
    Fonts();
  }, []);

  return (
    <ThemeProvider theme={Theme.lightmode}>
      <GlobalStyle />
      <Head>
        <link rel="i  con" href="/favicon.ico" />
        <meta name="description" content="Hi-Fi Corner Next.js" />
        <meta name="og:title" content="Hi-Fi Corner" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{"Hi-Fi Corner"}</title>
      </Head>
      <>{children}</>
    </ThemeProvider>
  );
};

export default Layout;
