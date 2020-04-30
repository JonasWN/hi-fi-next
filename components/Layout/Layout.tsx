import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

interface Iprops {
  children: React.ReactNode;
  home?: boolean;
}

const title = "Hi-Fi Corner";
const Theme = {
  lightmode: {
    background: "#eee;",
    color: "#333;",
  },
  darkMode: {
    background: "#333;",
    color: "#eee;",
  },
};

const Layout: React.FC<Iprops> = ({ children, home }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setIsDarkMode(true)
        : setIsDarkMode(false);
    }
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
      <header>header</header>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
      <main>{children}</main>
      <footer>footer</footer>
    </ThemeProvider>
  );
};

export default Layout;
