import axios from "axios";
import React from "react";
import { useEffect } from "react";

const CallbackGoogle = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    async function fetchCode() {
      axios
        .post(`https://ezoz-trip.com/api/oauth/login?code=${code}`)
        .then((res) => {
          console.log(res);
        });
    }
    fetchCode();
  });

  return <div>Login....</div>;
};

export default CallbackGoogle;
