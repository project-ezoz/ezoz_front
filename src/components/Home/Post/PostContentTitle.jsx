import React from "react";
import styled from "styled-components";
const PostText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const PostContentTitle = (props) => {
  return <PostText>"이번여름에 다녀왔던 나만의 오지"</PostText>;
};

export default PostContentTitle;
