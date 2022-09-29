import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.withCredentials = true;
const TOKEN =
  "ya29.a0Aa4xrXPfrYCp0uvCPSycbawtmqgPtzcGwMf0NH51nmV6GtuuyvQ_njZ2MBbNvdmG9Vzml7fn1NzAJfqou7uDLE8Aoi7QZ0WHb1ukxGl0qRHtYuq9YEhGwuPUztB-Vp49Nj1ZvNgi4myliCeIJu42fGI9tiFVHQaCgYKATASARISFQEjDvL92aB2UH1gDhWoDLKraUzFgQ0165";
const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  const [isGet, setIsGet] = useState("");
  // 1. 인가 코드 구글로 넘겨서 토큰 받기

  useEffect(() => {
    async function getToken() {
      axios
        .post(
          "/api/oauth/google",
          {
            body: { memberType: "GOOGLE" },
          },
          {
            headers: { Authorization: `Bearer ${TOKEN}` },
          }
        )
        .then((res) => {
          console.log(res);
          setIsGet(res);
        });
    }
    getToken();
  });

  // 2. 토큰 받아서 백엔드로 넘겨주기

  return <div>{isGet ? <p>get login</p> : <p>not login</p>}</div>;
};

export default CallbackGoogle;
