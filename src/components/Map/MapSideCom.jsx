import React from "react";
import styled from "styled-components";
import HeaderTitle from "../Home/Header/HeaderTitle";
import SearchSpot from "./MapSide/SearchSpot";

const SideBar = styled.div`
  background-color: black;
  color: white;
  height: 100%;
`;

function MapSideCom() {
  return (
    <SideBar>
      <HeaderTitle color="black" />
      <SearchSpot />
    </SideBar>
  );
}

export default MapSideCom;
