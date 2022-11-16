import React from "react";
import styled from "styled-components";
import img from "../../assets/g-logo.png";

const GoogleContainer = styled.div`
  width: 300px;
  text-align: center;
  height: auto;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 2px lightgray;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  &:hover {
    box-shadow: none;
    cursor: pointer;
  }
`;

const Img = styled.img`
  margin: 5px;
  width: 30px;
  height: 100%;
`;

function Login() {
  const handleTryLogin = () => {
    window.location.href = process.env.REACT_APP_API_URL2;
  };

  return (
    <GoogleContainer onClick={handleTryLogin}>
      <Img src={img} />
      구글로 3초만에 로그인 하기
    </GoogleContainer>
  );
}

export default Login;
