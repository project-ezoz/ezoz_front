import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../modules/redux/user";
const CallbackGoogle = () => {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    async function fetchData() {
      await dispatch(userActions.GoogleLogin(code));
    }
    fetchData();
  }, []);
  return <div>loging...</div>;
};

export default CallbackGoogle;
