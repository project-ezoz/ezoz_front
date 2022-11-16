import { Grid } from "@mui/material";
import React from "react";
import ImgContent from "../../components/Auth/ImgContent";
import Login from "../../components/Auth/Login";
import LoginContent from "../../components/Auth/LoginContent";

const AuthContainer = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <ImgContent />
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Login />
          <br />
          <LoginContent />
        </div>
      </Grid>
    </Grid>
  );
};

export default AuthContainer;
