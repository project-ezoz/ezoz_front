import React, { useEffect } from "react";
import Loading from "./Loading";

function Logout() {
  useEffect(() => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  });
  return <Loading />;
}

export default Logout;
