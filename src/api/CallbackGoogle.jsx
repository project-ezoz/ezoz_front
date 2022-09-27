import React from "react";

const CallbackGoogle = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  return <div>Login....</div>;
};

export default CallbackGoogle;
