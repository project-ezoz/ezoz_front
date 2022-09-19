import styled from "styled-components";

import React from "react";
import GoogleLogin from "react-google-login";
import * as config from "../config";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Login() {
  const onGoogleSignInSuccess = () => {
    console.log("succes");
  };
  const onGoogleSingInFailure = () => {
    console.log("fail");
  };
  return (
    <Container>
      <GoogleLogin
        clientId={config.CLIENT_ID}
        onSuccess={onGoogleSignInSuccess}
        onFailure={onGoogleSingInFailure}
        buttonText="구글로 계속하기"
      />
    </Container>
  );
}

export default Login;
