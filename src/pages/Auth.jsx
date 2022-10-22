import styled from "styled-components";
import React from "react";
import Login from "../components/Auth/Login";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Auth() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default Auth;
