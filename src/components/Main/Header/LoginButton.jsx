import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = styled(Link)`
  font-size: 28px;
  color: black;
  margin-right: 20px;
  &:hover {
    font-weight: bold;
    color: black;
  }
`;

const LoginButton = (props) => {
  return (
    <>
      {props.auth === "login" ? (
        <Login to="/login">JOIN</Login>
      ) : (
        <Login to="/logout">LOGOUT</Login>
      )}
    </>
  );
};

export default LoginButton;
