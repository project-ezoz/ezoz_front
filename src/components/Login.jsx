import axios from "axios";
import React from "react";
import styled from "styled-components";
import img from "../assets/g-logo.png";

const GoogleContainer = styled.div`
  width: auto;
  height: 40px;
  box-shadow: 2px 2px 2px 2px lightgray;
  border-radius: 2px;
  color: lightgray;
  font-weight: bold;
  padding-right: 16px;
  &:hover {
    background-color: #4285f4;
    color: white;
    box-shadow: none;
    border: 1px #4285f4 solid;
  }
`;

const Img = styled.img`
  height: 100%;
  padding-right: 16px;
`;

function Login() {
  const handleTryLogin = async () => {
    console.log("click");
    await axios
      .get("/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    //window.location.href = process.env.REACT_APP_API_URL2;
  };
  return (
    <GoogleContainer onClick={handleTryLogin}>
      <Img src={img} />
      Sign in with Google
    </GoogleContainer>
  );
}

export default Login;
