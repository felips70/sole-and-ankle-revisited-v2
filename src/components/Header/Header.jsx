import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import { QUERIES } from "../../constants";
import { Dialog, VisuallyHidden } from "radix-ui";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <TopBar />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">À Vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side />
        <MovileNav>
          <Icon id="shopping-bag" strokeWidth={2} />
          <Icon id="search" strokeWidth={2} />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Icon id="menu" strokeWidth={2} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <DialogOverlay />
              <DialogContent>
                <VisuallyHidden.Root>
                  <Dialog.Title>Menu</Dialog.Title>
                </VisuallyHidden.Root>
                <VisuallyHidden.Root>
                  <Dialog.Description>Menu Description</Dialog.Description>
                </VisuallyHidden.Root>
                <MobileMenu />
              </DialogContent>
            </Dialog.Portal>
          </Dialog.Root>
        </MovileNav>
      </MainHeader>
    </header>
  );
};

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const DialogContent = styled(Dialog.Content)`
  background-color: var(--white);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
`;

const TopBar = styled.div`
  display: none;

  @media (${QUERIES.tabletAndUnder}) {
    display: block;
    background-color: var(--gray-900);
    height: 4px;
  }
`;

const MovileNav = styled.nav`
  display: none;

  @media (${QUERIES.tabletAndUnder}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndUnder}) {
    display: flex;
    gap: 16px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  overflow-x: scroll;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7.5vw - 3.75rem, 3rem);
  margin: 0px 48px;

  @media (${QUERIES.tabletAndUnder}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  text-wrap: nowrap;
  color: var(--gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
