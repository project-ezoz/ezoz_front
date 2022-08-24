import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
`;
const str = `오지는 새로운 경험을 주는것 혹은 일상에서 벗어나는 자유로움을 느끼는것`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  gap: 10%;
  justify-content: center;
`;

const Box = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -15.5%, #000000 120.2%);
  width: 25rem;
  height: 40rem;
  text-align: center;
  background-color: #00dc5f;
`;

const Post = () => {
  return (
    <div style={{ "margin-bottom": "5rem" }}>
      <Title>{str}</Title>
      <BoxContainer>
        <Box>box1</Box>
        <Box>box2</Box>
      </BoxContainer>
    </div>
  );
};

export default Post;
