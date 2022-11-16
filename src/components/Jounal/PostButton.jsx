import React from "react";
import styled from "styled-components";

const WriteJournalBtn = styled.div`
  background-color: #00dc5f;
  color: black;
  width: 100px;
`;
function PostButton() {
  return (
    <div>
      <WriteJournalBtn>게시물 작성하기</WriteJournalBtn>
    </div>
  );
}

export default PostButton;
