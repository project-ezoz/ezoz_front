import React from "react";
import axios from "axios";
import { useEffect } from "react";
const CallbackGoogle = () => {
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    async function fetchData() {
      console.log(code);
    }
    fetchData();
  }, []);

  return <>로그인 중</>;
};

export default CallbackGoogle;
