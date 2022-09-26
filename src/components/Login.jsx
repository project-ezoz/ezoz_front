import styled from "styled-components";

import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Login() {
  const [userObj, setUserObj] = useState("");
  const onGoogleSignInSuccess = (res) => {
    console.log(res);
  };
  const onGoogleSingInFailure = (res) => {
    console.log("fail");
    console.log(res);
  };
  return (
    <Container>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
          buttonText="구글로 계속하기"
          onSuccess={onGoogleSignInSuccess}
          onError={onGoogleSingInFailure}
        />
      </GoogleOAuthProvider>
    </Container>
  );
}

export default Login;
