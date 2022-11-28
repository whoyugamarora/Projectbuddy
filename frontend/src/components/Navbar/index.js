import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Heading,
  HeadingLink
} from './NavbarElements';
import { auth } from "../../pages/firebase";
import { GoSignOut } from "react-icons/go";
import { BiUser } from "react-icons/bi"
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';



const Navbar = ({ user }) => {
  return (
    <>
      <Nav>
        <Heading><HeadingLink to='/'>
          ProjectBuddy
          </HeadingLink>
        </Heading>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/listings' activeStyle>
            Listings
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavMenu>
          <NavLink to='/newlisting' activeStyle>
            Add New
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/myaccount'> <BiUser /> Account</NavBtnLink>
            <Button
                  style={{fontSize: '0.85rem', padding:'8px'}}
                  variant="outline-danger"
                  type="submit"
                  id="signbtn"
                  onClick={() => auth.signOut()}
                >
                  <GoSignOut /> 
                  Sign Out
                </Button>
          </NavBtn>
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;