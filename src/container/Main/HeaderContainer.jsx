import React from "react";
import styled from "styled-components";
import HeaderTitle from "../../components/Main/Header/HeaderTitle";
import LoginButton from "../../components/Main/Header/LoginButton";
const Menu = styled.div`
  position: absolute;
  display: flex;
  top: 3%;
  right: 3%;
  z-index: 1;
  width: auto;
`;
const HeaderContainer = () => {
  return (
    <div>
      <HeaderTitle color="white" />
      <Menu>
        {window.localStorage.getItem("token") === null ? (
          <LoginButton auth="login" />
        ) : (
          <LoginButton auth="logout" />
        )}
      </Menu>
    </div>
  );
};

export default HeaderContainer;
