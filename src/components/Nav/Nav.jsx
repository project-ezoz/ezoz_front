import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import Hamburger from "./Hamburger";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 800px;
  background-color: white;
`;
const Nav = () => {
  const [isClose, setClose] = useState("");
  const handleNavBarClose = () => {
    setClose(true);
  };
  return (
    <>
      {!isClose ? (
        <NavContainer>
          <div>
            <CloseIcon onClick={handleNavBarClose} sx={{ fontSize: 30 }} />
          </div>
          <div style={{ marginTop: "40px;" }}>
            <NavLink
              to="/"
              style={{
                fontSize: "30px",
                color: "#212529",
                paddingLeft: "20px",
                margin: "50px",
              }}
            >
              EZOZ
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/map"
              style={{
                fontSize: "30px",
                color: "#212529",
                paddingLeft: "20px",
                margin: "50px",
              }}
            >
              OZ MAP
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/journal"
              style={{
                fontSize: "30px",
                color: "#212529",
                paddingLeft: "20px",
                margin: "50px",
              }}
            >
              JOURNAL
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              style={{
                fontSize: "30px",
                color: "#212529",
                paddingLeft: "20px",
                margin: "50px",
              }}
            >
              ABOUT
            </NavLink>
          </div>
        </NavContainer>
      ) : (
        <Hamburger />
      )}
    </>
  );
};

export default Nav;
