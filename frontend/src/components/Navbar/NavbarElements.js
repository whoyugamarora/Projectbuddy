import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #4f46e5; /* Indigo-600 */
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
  color: #ffffff; /* White text */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #c7d2fe; /* Light indigo hover effect */
    transition: color 0.3s ease;
  }

  &.active {
    border-bottom: 2px solid #c7d2fe; /* Highlight for active link */
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff; /* White bars icon */

  @media screen and (max-width: 880px) {
    display: block;
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
    background: #4f46e5; /* Indigo-600 for mobile dropdown */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.active {
      display: flex;
      row-gap: 1rem;
      padding: 1rem 0;
    }
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 880px) {
    display: none;

    &.active {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #c7d2fe; /* Light Indigo Button */
  padding: 8px 16px;
  color: #4f46e5; /* Indigo-600 text */
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff; /* White background on hover */
    color: #4f46e5; /* Indigo text */
  }
`;

export const Heading = styled.h5`
  color: #ffffff; /* White text */
  font-size: 1.25rem;
  font-weight: bold;
`;

export const HeadingLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: #c7d2fe; /* Lighter indigo on hover */
    transition: color 0.3s ease;
  }
`;
