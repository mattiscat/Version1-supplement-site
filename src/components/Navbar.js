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

export const Navbar = ({ items, setFilter }) => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInner>
        <LeftContainer>
          <h1
            style={{
              fontFamily: "Beau Rivage, cursive",
              letterSpacing: "3px",
              color: "#fff",
              marginRight: "15px",
              paddingBottom: "10px",
              fontSize: "48px",
            }}
          >
            Version
          </h1>
          <b
            style={{
              fontFamily: "Beau Rivage, cursive",
              paddingBottom: "10px",
              fontSize: "1.3em",
            }}
          >
            1
          </b>
        </LeftContainer>
        <RightContainer>
          <NavbarLinksContainer>
            <NavbarLink to="/Version1-supplement-site">Home</NavbarLink>
            <NavbarLink
              to="/Version1-supplement-site/supplements"
              onClick={() => setFilter("all")}
            >
              Supplements
            </NavbarLink>
            <NavbarLink to="/Version1-supplement-site/cart">
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
          <NavbarLinkExtended
            to="/Version1-supplement-site"
            onClick={() => setExtendNavbar(false)}
          >
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/Version1-supplement-site/supplements"
            onClick={() => {
              setExtendNavbar(false);
              setFilter("all");
            }}
          >
            Supplements
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/Version1-supplement-site/cart"
            onClick={() => setExtendNavbar(false)}
          >
            Cart
          </NavbarLinkExtended>
        </NavbarExtended>
      )}
    </NavbarContainer>
  );
};
