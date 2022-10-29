import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  border: 1px solid black;
  text-align: center;
  font-size: 1.2rem;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const InputValue = ({ ...rest }) => {
  return <Input {...rest} />;
};

export default InputValue;
