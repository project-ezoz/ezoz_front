import React from "react";
import styled from "styled-components";

const RunnerBox = styled.div`
  background-color: black;
  color: white;
  width: 200px;
  text-align: center;
`;

function Runner() {
  return <RunnerBox>오지 러너 사진들</RunnerBox>;
}

export default Runner;
