import {
  LeftContainer,
  NavbarContainer,
  NavbarExtended,
  NavbarInner,
  NavbarLinksContainer,
  RightContainer,
  NavbarLink,
  DropdownButton,
  NavbarLinkExtended,
  CartCount,
} from "../styles/Navbar.style";
import { useState } from "react";

export const Navbar = ({ items }) => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInner>
        <LeftContainer>Version 1</LeftContainer>
        <RightContainer>
          <NavbarLinksContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/supplements">Supplements</NavbarLink>
            <NavbarLink to="/cart">
              Cart
              {items > 0 && <CartCount>{items}</CartCount>}
            </NavbarLink>
            <DropdownButton onClick={() => setExtendNavbar((curr) => !curr)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </DropdownButton>
          </NavbarLinksContainer>
        </RightContainer>
      </NavbarInner>
      {extendNavbar && (
        <NavbarExtended>
          <NavbarLinkExtended to="/" onClick={() => setExtendNavbar(false)}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/supplements"
            onClick={() => setExtendNavbar(false)}
          >
            Supplements
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/cart" onClick={() => setExtendNavbar(false)}>
            Cart
          </NavbarLinkExtended>
        </NavbarExtended>
      )}
    </NavbarContainer>
  );
};
