import axios from "axios";
import React from "react";
import { useEffect } from "react";

axios.defaults.baseURL = "https://ezoz-trip.com";
axios.defaults.withCredentials = true;
const TOKEN =
  "ya29.a0Aa4xrXOCb58xk_AirEOb4sYnEHd-0aRYFEQDyHxBstygJL4_-vj0KViG7bJexeuUnScufyizo0Jm9MVfRGAMQkeqQLXeHhIbjEZjUw1PkHuw0WK-PydtSGFJRFZELMTuBeBRGvYiTcyBBFaziLM8K1h0VWUy3gaCgYKATASARISFQEjDvL9uFar0qgXbvXxsiaJXH53PQ0165";
const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  // 1. 인가 코드 구글로 넘겨서 토큰 받기

  axios
    .post(
      "/login",
      {
        body: { memberType: "GOOGLE" },
      },
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    )
    .then((res) => console.log(res));

  // 2. 토큰 받아서 백엔드로 넘겨주기

  return <div>Login....</div>;
};

export default CallbackGoogle;
