import React from "react";
import styled from "styled-components";
import InputSearch from "../../components/MapSideBar/InputSearch";
const SideBar = styled.div`
  background-color: black;
  color: white;
  height: 100%;
`;
const MapSideContainer = () => {
  return (
    <SideBar>
      <InputSearch />
    </SideBar>
  );
};

export default MapSideContainer;
