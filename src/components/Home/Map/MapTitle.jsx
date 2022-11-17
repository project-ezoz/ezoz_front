import React from "react";
import styled from "styled-components";
const Title = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
const MapTitle = (props) => {
  return <Title>{props.str}</Title>;
};

export default MapTitle;
