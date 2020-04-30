import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderStyle = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10% 5%;
  background: ${(props) => props.theme.colors.normal};
  color: ${(props) => props.theme.background};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Links = styled.div``;

const Header = () => {
  return (
    <HeaderStyle>
      <Nav>
        <Links>Settings</Links>
        <Links> Catagories </Links>
        <Links>Products</Links>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
