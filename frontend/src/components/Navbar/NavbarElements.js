import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #313131;
  height: 65px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 100vw;
  margin-inline: auto;
  z-index: 10;
  font-size: 0.95rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
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
    color: #256CE1;
  }

  &.active {
    color: #256CE1;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 880px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 880px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    background: #313131;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    &.active {
      display: flex;
      row-gap: 10vw;
      padding: 40px;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 880px) {
    display: none;
    flex-direction: column;
    width: 100%;

    &.active {
      display: flex;
      flex-direction: row;
      padding: 0;
      align-items:center;
      justify-content:space-evenly;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256CE1;
  padding: 10px 22px;
  color: #fff;
  font-size: 0.85rem;
  text-decoration: none;
  margin: 5px;

  &:hover {
    background: #fff;
    color: #010606;
    transition: background-color 0.3s ease;

  }
`;

export const Heading = styled.h5`
  color: white;
  justify-items: center;
  align-items: center;
`;

export const HeadingLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: background-color 1s;

  &:hover {
    color: grey;
  }
`;
