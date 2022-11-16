import React from "react";
import styled from "styled-components";
import HeaderTitle from "../../components/Home/Header/HeaderTitle";
import LoginButton from "../../components/Home/Header/LoginButton";
import Hamburger from "../../components/Nav/Hamburger";

const Menu = styled.div`
  position: absolute;
  display: flex;
  top: 3%;
  right: 3%;
  z-index: 1;
  width: auto;
`;
const HomeHeader = () => {
  return (
    <div>
      <HeaderTitle />
      <Menu>
        {window.localStorage.getItem("token") === null ? (
          <LoginButton log="login" />
        ) : (
          <LoginButton log="logout" />
        )}
        <Hamburger />
      </Menu>
    </div>
  );
};

export default HomeHeader;
