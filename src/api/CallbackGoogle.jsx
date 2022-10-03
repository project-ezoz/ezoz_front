import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.withCredentials = true;
const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  const [isCode, setIsCode] = useState("");
  const [isGet, setIsGet] = useState("");

  /*useEffect(() => {
    async function getToken() {
      axios
        .get(`https://ezoz-trip.com/auth/google?code=${code}`)
        .then((res) => {
          console.log(res);
          setIsGet(res);
        });
    }
    getToken();
  });*/

  return <div>{isGet ? <p>get login</p> : <p>not login</p>}</div>;
};

export default CallbackGoogle;
