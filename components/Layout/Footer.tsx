import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.normal};
  width: 100%;
  height: 100px;
`;

const Footer = () => {
  return <FooterStyled></FooterStyled>;
};

export default Footer;
