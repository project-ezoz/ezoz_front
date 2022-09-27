import React from "react";
import styled from "styled-components";
import peo1 from "../assets/peo1.png";
import peo2 from "../assets/peo2.png";
const Title = styled.div`
  font-size: 20px;
`;

const str = `저는 오지를 탐험하는 디자이너 전성은 입니다`;

const Page = styled.div`
  height: 40rem;
`;
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  gap: 10%;
  justify-content: center;
`;

const Box = styled.img`
  opacity: 75%;
  width: 20rem;
  height: 25rem;
  text-align: center;
`;
const PostInterview = () => {
  return (
    <Page>
      <Title>OZ 러너 인터뷰</Title>
      <BoxContainer>
        <Box src={peo1} />
        <Box src={peo2} />
      </BoxContainer>
    </Page>
  );
};

export default PostInterview;
