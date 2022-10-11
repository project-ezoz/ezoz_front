import axios from "axios";
import React from "react";

const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  return <div>hi</div>;
};

export default CallbackGoogle;
