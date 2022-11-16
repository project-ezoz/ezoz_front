import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import InputValue from "../../components/Home/Apply/InputValue";
import ApplyButton from "../../components/Home/Apply/ApplyButton";

const Container = styled.div`
  background-color: #eeeeee;
  text-align: center;
  padding-top: 200px;
  padding-bottom: 200px;
  height: 40rem;
`;

const HomeApply = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleApply = (e) => {
    e.preventDefault();

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
      <InputValue
        id="email_input"
        className="apply_input"
        placeholder="이메일"
        name="email"
        onChange={onChange}
        value={email}
      />
      <InputValue
        id="name_input"
        className="apply_input"
        placeholder="이름"
        name="username"
        onChange={onChange}
        value={username}
      />
      <ApplyButton name="구독 신청하기" onClick={handleApply} />
    </Container>
  );
};

export default HomeApply;
