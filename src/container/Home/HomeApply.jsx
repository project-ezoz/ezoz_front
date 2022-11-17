import React from "react";
import styled from "styled-components";
import ApplyContainer from "./Apply/ApplyContainer";

const Container = styled.div`
  background-color: #000000;
  height: 960px;
`;

const HomeApply = () => {
  return (
    <Container>
      <ApplyContainer />
    </Container>
  );
};

export default HomeApply;
