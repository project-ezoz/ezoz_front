import styled from "styled-components";

import React from "react";
import GoogleLogin from "react-google-login";
import * as config from "../config";

function Login() {
  const onGoogleSignInSuccess = () => {
    console.log("succes");
  };
  const onGoogleSingInFailure = () => {
    console.log("fail");
  };
  return (
    <div>
      <GoogleLogin
        clientId={config.CLIENT_ID}
        onSuccess={onGoogleSignInSuccess}
        onFailure={onGoogleSingInFailure}
        buttonText="구글로 계속하기"
      />
    </div>
  );
}

export default Login;
