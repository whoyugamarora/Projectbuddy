import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #313131;
  height: 65px;
  width: 100vw;
  display: flex;
  justify-content: space-around ;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  font-size: 0.95rem;
  margin: auto;
  padding: 1rem;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  
  &:hover {
    transition: all 0.2s ease-in-out;

  &.active {
    color: #15cdfc;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: space-around;
  margin-right: 24px;
  justify-content:space-evenly;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  font-size: 0.85rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-inline: 1rem;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Button = styled.nav`
  font-size: 0.8rem;
`;

export const Heading = styled.h5`
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;
  color: white;
  margin: 0;
`;

export const HeadingLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    transition: all 0.2s ease-in-out;
`;