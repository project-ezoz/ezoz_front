import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  color: #00dc5f;
  background-color: #2a2f3b;

  &:hover {
    width: 200px;
    cursor: pointer;
  }
`;
const SendButton = () => {
  return <Button>작성 완료</Button>;
};

export default SendButton;
