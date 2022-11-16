import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import Nav from "./Nav";
const HamBox = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Hamburger = () => {
  const handleOpen = () => {
    setOpen(true);
  };
  const [isOpen, setOpen] = useState("");
  return (
    <HamBox>
      {isOpen ? <Nav /> : <BsList size="40" onClick={handleOpen} />}
    </HamBox>
  );
};

export default Hamburger;
