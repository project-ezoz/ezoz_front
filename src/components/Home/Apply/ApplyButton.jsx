import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: #424242;
  color: white;
  text-align: center;
  width: auto;
  font-size: 30px;
`;

const ApplyButton = ({ name, ...rest }) => {
  return <Button {...rest}>{name}</Button>;
};

export default ApplyButton;
