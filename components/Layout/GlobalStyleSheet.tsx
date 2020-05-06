import { createGlobalStyle } from "styled-components";
const FontFaceObserver = require("fontfaceobserver");

export const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Oswald:300,400,500,700,900";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const oswald = new FontFaceObserver("Oswald");

  oswald.load().then(() => {
    document.documentElement.classList.add("oswald");
  });
};

export const GlobalStyle = createGlobalStyle`
html,
body {
padding: 0;
margin: 0;
line-height: 1.6;
font-size: 18px;
//@ts-ignore
background: ${(props) => props.theme.background}
//@ts-ignore
color: ${(props) => props.theme.colors.normal}
height: 100%;
width: 100%;
min-height: 100%;
overflow-x: hidden;
scroll-behavior: smooth;
}

* {
box-sizing: border-box;
}

a {
color: #0070f3;
text-decoration: none;
}

li{
  list-style:none
}

a:hover {
text-decoration: underline;
}

img {
width: 100%;
height: auto;
display: block;
}

.oswald {
  font-family: oswald
}
`;
