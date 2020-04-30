import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
const title = "Hi-Fi Corner";

interface Iprops {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<Iprops> = ({ children, home }) => {
  const Global = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

  `;

  const theme = {
    background: "#320",
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head>
          <link rel="i  con" href="/favicon.ico" />
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
        <Global />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
