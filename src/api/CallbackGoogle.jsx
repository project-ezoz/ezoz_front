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

  useEffect(() => {
    async function getToken() {
      axios
        .get(
          `https://ezoz-trip.com/auth/google/callback?code=${code}&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none`
        )
        .then((res) => {
          console.log(res);
          setIsGet(res);
        });
    }
    getToken();
  });

  return <div>{isGet ? <p>get login</p> : <p>not login</p>}</div>;
};

export default CallbackGoogle;
