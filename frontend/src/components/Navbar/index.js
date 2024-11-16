import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Heading,
  HeadingLink,
} from './NavbarElements';
import { auth } from "../../pages/firebase";
import { GoSignOut } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import Button from "react-bootstrap/Button";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <Heading>
          <HeadingLink to="/dashboard">ProjectBuddy</HeadingLink>
        </Heading>
        <Bars onClick={toggleMenu} />
        <NavMenu className={isOpen ? 'active' : ''}>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/listings" activeStyle>
            Listings
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Add New
          </NavLink>
        </NavMenu>
        <NavBtn className={isOpen ? 'active' : ''}>
          <NavBtnLink to="/myaccount">
            <BiUser /> Account
          </NavBtnLink>
          <Button
            style={{
              fontSize: '0.85rem',
              padding: '10px',
              border: 'none',
              color: '#fff'
            }}
            variant="link"
            onClick={() => auth.signOut()}
          >
            <GoSignOut /> Sign Out
          </Button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
