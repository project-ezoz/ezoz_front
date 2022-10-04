import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CallbackGoogle = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("hi");
    // axios.get(`https://ezoz-trip.com/auth/google?code=${code}`).then((res) => {
    //   console.log(res);
    // });
  }, []);

  return <div>hi</div>;
};

export default CallbackGoogle;
