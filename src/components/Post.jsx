import React from "react";
import styled from "styled-components";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
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

const Box = styled.img`
  opacity: 75%;
  width: 25rem;
  height: 35rem;
  text-align: center;
`;

const Post = () => {
  return (
    <div style={{ "margin-bottom": "5rem" }}>
      <Title>{str}</Title>
      <BoxContainer>
        <Box src={post1} />
        <Box src={post2} />
      </BoxContainer>
    </div>
  );
};

export default Post;
