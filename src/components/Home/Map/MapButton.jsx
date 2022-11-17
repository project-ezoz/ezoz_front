import React from "react";
import styled from "styled-components";
const Button = styled.div`
  background-color: #00dc5f;
  color: black;
  width: 220px;
  text-align: center;
  font-size: 34px;
  font-weight: bold;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const MapButton = () => {
  return <Button>MAP -&gt; </Button>;
};

export default MapButton;
