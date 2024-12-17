import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnMobile,
  NavBtnLink,
  HeadingLink,
} from "./NavbarElements";
import { auth } from "../../pages/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      {/* Logo */}
      <HeadingLink to="/dashboard">ProjectBuddy</HeadingLink>

      {/* Hamburger Menu */}
      <Bars onClick={toggleMenu} />

      {/* Menu Links */}
      <NavMenu isOpen={isOpen}>
        <NavLink to="/search" activeStyle>Search</NavLink>
        <NavLink to="/projects" activeStyle>Add New</NavLink>
        <NavLink to="/listings" activeStyle>Listings</NavLink>
        <NavLink to="/idea" activeStyle>Ideas</NavLink>
        <NavLink to="/about" activeStyle>About</NavLink>
        <NavLink to="/contact" activeStyle>Contact Us</NavLink>

        {/* Buttons (Mobile Only) */}
        <NavBtnMobile>
          <NavBtnLink to="/myaccount">Account</NavBtnLink>
          <NavBtnLink onClick={() => auth.signOut()}>Sign Out</NavBtnLink>
        </NavBtnMobile>
      </NavMenu>

      {/* Buttons (Desktop Only) */}
      <NavBtn className="desktop-only">
        <NavBtnLink to="/myaccount">Account</NavBtnLink>
        <NavBtnLink onClick={() => auth.signOut()}>Sign Out</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
