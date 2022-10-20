import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://ezoz-trip.com/auth/google?code=${code}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.accessToken);
        const A_TOKEN = data.accessToken;
        localStorage.setItem("token", A_TOKEN);
        navigate("/", { state: { logState: "success" } });
      })
      .catch((error) => {
        console.log(error);
        window.alert("login fail");
      });
  }, []);
  return (
    <div>
      <Spinner />
    </div>
  );
};

export default CallbackGoogle;
