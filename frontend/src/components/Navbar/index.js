import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { auth, db, logout } from "../../pages/firebase";
import Avvvatars from 'avvvatars-react';



const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/dashboard'>
          <img src={('../../images/logo.svg')} alt='logo' />
        </NavLink>
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
          <NavLink to='/sign-up' activeStyle>
            Sign Up
            
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
        <Avvvatars value="tim@apple.com" />
        <NavBtnLink to='/' onClick={logout}>Log out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;