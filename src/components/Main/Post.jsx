import React from "react";
import styled from "styled-components";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";

const Title = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 20px;
`;
const str =
  "오지는 새로운 경험을 주는것 혹은 일상에서 벗어나는 자유로움을 느끼는것";

const BoxContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;

const Back = styled.img`
  width: 25rem;
  height: 35rem;
  text-align: center;
  filter: brightness(45%);
  background-color: #000;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10rem;
`;

const MoreBtn = styled.div`
  width: 120px;
  height: auto;
  font-size: 20px;
  background-color: black;
  color: white;
  text-align: center;

  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
`;
const PostText = styled.p`
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: bold;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const PostBox = styled.div`
  position: relative;
`;

const Post = () => {
  return (
    <Page>
      <Title>{str}</Title>
      <BoxContainer>
        <GridBox>
          <PostBox>
            <Back src={post1} />
            <PostText>"이번여름에 다녀왔던 나만의 오지"</PostText>
            <MoreBtn>더보기</MoreBtn>
          </PostBox>
          <PostBox>
            <Back src={post2} />
            <PostText>"이번여름에 다녀왔던 나만의 오지2"</PostText>
            <MoreBtn>더보기</MoreBtn>
          </PostBox>
        </GridBox>
      </BoxContainer>
    </Page>
  );
};

export default Post;
