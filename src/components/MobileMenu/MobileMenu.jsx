import React from "react";
import styled from "styled-components";

import { Dialog } from "radix-ui";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const MobileMenu = () => {
  return (
    <Wrapper>
      <Dialog.Close asChild>
        <Close />
      </Dialog.Close>
      <Side />
      <Nav>
        <NavLink color="secondary" href="/sale">
          Sale
        </NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Side />
      <Footer>
        <NavLink href="/terms">Terms and Conditions</NavLink>
        <NavLink href="/privacy">Privacy Policy</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </Footer>
    </Wrapper>
  );
};

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(p) =>
    p.color === "secondary" ? "var(--secondary)" : "var(--gray-900)"};
  font-weight: var(--weight-medium);
`;

const Close = styled(Icon).attrs((_) => ({
  id: "close",
  strokeWidth: 2,
}))`
  margin-left: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Side = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
`;

export default MobileMenu;
