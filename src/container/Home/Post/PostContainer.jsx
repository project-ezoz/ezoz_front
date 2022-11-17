import React from "react";
import styled from "styled-components";
import PostContentTitle from "../../../components/Home/Post/PostContentTitle";
import PostMoreButton from "../../../components/Home/Post/PostMoreButton";

const Container = styled.div`
  width: 510px;
  height: 700px;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PostContainer = (props) => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),url(/assets/${props.idx}.png)`,
      }}
    >
      <PostContentTitle />
      <PostMoreButton />
    </Container>
  );
};

export default PostContainer;
