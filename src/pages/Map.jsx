import React from "react";
import styled from "styled-components";
import MapCom from "../components/MapCom";
import MapSideCom from "../components/MapSideCom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  float: left;
`;
function Map() {
  return (
    <Container>
      <MapSideCom />
      <MapCom />
    </Container>
  );
}

export default Map;
