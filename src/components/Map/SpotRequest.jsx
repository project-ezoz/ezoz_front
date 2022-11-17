import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 120px;
  background-color: #00dc5f;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
  position: absolute;
  top: 80%;
  left: 55%;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
const SpotRequest = () => {
  const handleSpotRegister = () => {};

  return <BoxContainer onClick={handleSpotRegister}>스팟 등록</BoxContainer>;
};

export default SpotRequest;
