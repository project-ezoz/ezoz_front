import React from "react";
import { Link } from "react-router-dom";

import HeaderContainer from "./HeaderContainer";

const MainContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <div>
        <Link to="/map">지도</Link>
      </div>
    </div>
  );
};

export default MainContainer;
