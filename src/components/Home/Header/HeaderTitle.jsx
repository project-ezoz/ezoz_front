import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: black;
  position: absolute;
  top: 3%;
  left: 3%;
  z-index: 1;
  font-size: 28px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
const handleHomeMove = () => {
  window.location.href = "/";
};
const HeaderTitle = () => {
  return <Title onClick={handleHomeMove}>EZOZ</Title>;
};

export default HeaderTitle;
