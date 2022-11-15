import React from "react";
import styled from "styled-components";

const ArticleBox = styled.div`
  background-color: green;
  width: 300px;
`;
function Article() {
  return (
    <ArticleBox>
      <img src="test" alt="joursnal 기사" />
      <p className="journal-title">Text area</p>
    </ArticleBox>
  );
}

export default Article;
