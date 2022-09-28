import axios from "axios";
import React from "react";
import { useEffect } from "react";

axios.defaults.baseURL = "https://ezoz-trip.com";
axios.defaults.withCredentials = true;

const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  // 1. 인가 코드 구글로 넘겨서 토큰 받기

  // 2. 토큰 받아서 백엔드로 넘겨주기

  return <div>Login....</div>;
};

export default CallbackGoogle;
