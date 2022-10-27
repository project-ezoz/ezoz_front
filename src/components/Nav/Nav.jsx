import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 200px;
  height: 800px;
  background-color: white;
`;
const Nav = () => {
  const handleNavBarClose = () => {};
  return (
    <NavContainer>
      <div>
        <div onClick={handleNavBarClose}>X</div>
      </div>
      <div>
        <NavLink to="/">EZOZ</NavLink>
      </div>
      <div>
        <NavLink to="/map">OZ MAP</NavLink>
      </div>
      <div>
        <NavLink to="/journal">JOURNAL</NavLink>
      </div>
      <div>
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    </NavContainer>
  );
};

export default Nav;
