import React from "react";

import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
function Loading() {
  return (
    <LoadContainer>
      <Spinner animation="border" />
    </LoadContainer>
  );
}

export default Loading;
