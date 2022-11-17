import React from "react";
import styled from "styled-components";
const MoreBtn = styled.div`
  width: 120px;
  height: auto;
  font-size: 20px;
  font-weight: 700;
  background-color: black;
  color: white;
  text-align: center;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
  }
`;
const PostMoreButton = (props) => {
  const handleMoveJournal = () => {
    window.location.href = "/journal";
  };
  return <MoreBtn onClick={handleMoveJournal}>더보기</MoreBtn>;
};

export default PostMoreButton;
