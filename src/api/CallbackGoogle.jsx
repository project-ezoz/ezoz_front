import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Auth/Loading";

const CallbackGoogle = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://ezoz-trip.com/auth/google?code=${code}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.accessToken);
        const A_TOKEN = res.data.accessToken;
        localStorage.setItem("token", A_TOKEN);
        //navigate("/", { state: { logState: "success" } });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
      });
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default CallbackGoogle;
