import React from "react";
import styled from "styled-components";

import AllMap from "../container/Map/AllMap";

const Container = styled.div`
  width: 100%;
  height: 100%;
  float: left;
`;
function Map() {
  return (
    <Container>
      <AllMap />
    </Container>
  );
}

export default Map;
