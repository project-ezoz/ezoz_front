import { Typography } from "@mui/material";
import React from "react";

const LoginContent = () => {
  return (
    <Typography style={{ verticalAlign: "middle", width: "auto" }}>
      로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
      <br />
      서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
    </Typography>
  );
};

export default LoginContent;
