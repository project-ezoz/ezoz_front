import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: #424242;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 700px;
  font-size: 1.4rem;
`;

const ApplyButton = ({ name, ...rest }) => {
  return <Button {...rest}>{name}</Button>;
};

export default ApplyButton;
