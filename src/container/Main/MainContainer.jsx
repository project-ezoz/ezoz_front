import React from "react";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      메인 컨테이너
      <Link to="/login">로그인</Link>
      <Link to="/logout">로그아웃</Link>
      <Link to="/map">지도</Link>
    </div>
  );
};

export default MainContainer;
