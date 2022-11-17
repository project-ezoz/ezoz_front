import React from "react";
import styled from "styled-components";
import InterviewContentTitle from "./InterviewContentTitle";

const InterviewBox = styled.div`
  width: 500px;
  height: 300px;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InterviewContent = (props) => {
  return (
    <InterviewBox
      style={{
        backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ),url(/assets/${props.idx}.png)`,
      }}
    >
      <InterviewContentTitle />
    </InterviewBox>
  );
};

export default InterviewContent;
