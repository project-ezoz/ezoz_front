import React from "react";
import styled from "styled-components";
import "./HomeApply.css";
import { useState } from "react";
import axios from "axios";
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

const HomeApply = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs; // 비구조화 할당을 통해 값 추출
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const handleApply = (e) => {
    e.preventDefault();
    // console.log(inputs);
    axios
      .post("https://ezoz-trip.com/api/subscription", {
        username: inputs.username,
        email: inputs.email,
      })
      .then((response) => {
        console.log(response);
        setInputs({
          username: "",
          email: "",
        });
      })
      .catch((error) => {
        // 오류발생시 실행
        console.log(error);
      });
  };
  return (
    <Container>
      <input
        id="email_input"
        className="apply_input"
        placeholder="이메일"
        name="email"
        onChange={onChange}
        value={email}
      />
      <input
        id="name_input"
        className="apply_input"
        placeholder="이름"
        name="username"
        onChange={onChange}
        value={username}
      />
      <Button onClick={handleApply}>구독 신청하기</Button>
    </Container>
  );
};

export default HomeApply;
