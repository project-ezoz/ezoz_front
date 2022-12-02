import styled from "styled-components";
import React from "react";
import AuthContainer from "../container/Auth/AuthContainer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Auth() {
  return (
    <Container>
      <AuthContainer />
    </Container>
  );
}

export default Auth;
