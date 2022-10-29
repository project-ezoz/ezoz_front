import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: #424242;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 800px;
  font-size: 1.4rem;
`;

const ApplyButton = (props) => {
  return <Button>{props}</Button>;
};

export default ApplyButton;
