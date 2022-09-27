import React from "react";
import styled from "styled-components";
import "./postApply.css";

const Container = styled.div`
  background-color: #eeeeee;
  text-align: center;
  padding-top: 200px;
  padding-bottom: 200px;
  height: 40rem;
`;

const Button = styled.div`
  background-color: #424242;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
`;

const PostApply = () => {
  return (
    <Container>
      <input id="email_input" className="apply_input" placeholder="이메일" />
      <input id="name_input" className="apply_input" placeholder="이름" />
      <Button>구독 신청하기</Button>
    </Container>
  );
};

export default PostApply;
