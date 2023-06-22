import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: rgba(0, 0, 0, 0.998);
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  padding-left: 7%;
  color: gold;
  font-size: 3rem;
  padding-top: 20px;

  @media (max-width: 700px) {
    font-size: 2.3rem;
  }
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  align-items: center;
`;

export const NavbarInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  position: relative;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: white;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9px;
  top: -15px;
  right: -20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: red;
  font-size: 1.3rem;
`;

export const NavbarLinkExtended = styled(Link)`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: white;
`;

export const DropdownButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
