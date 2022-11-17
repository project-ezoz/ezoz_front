import React from "react";
import styled from "styled-components";
const Title = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 20px;
`;
const PostHeader = () => {
  return (
    <Title>
      오지는 새로운 경험을 주는것 혹은 일상에서 벗어나는 자유로움을 느끼는것
    </Title>
  );
};

export default PostHeader;
