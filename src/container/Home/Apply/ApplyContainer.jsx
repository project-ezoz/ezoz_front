import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import ApplyButton from "../../../components/Home/Apply/ApplyButton";
import InputValue from "../../../components/Home/Apply/InputValue";
import { Grid } from "@mui/material";

const Box = styled.div`
  background-color: #eeeeee;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ApplyContainer = () => {
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
    <Box>
      <div>
        <Grid
          container
          spacing={2}
          columns={2}
          style={{ marginBottom: "20px" }}
        >
          <Grid item>
            <InputValue
              id="email_input"
              className="apply_input"
              placeholder="이메일 주소"
              name="email"
              onChange={onChange}
              value={email}
            />
          </Grid>
          <Grid item>
            <InputValue
              id="name_input"
              className="apply_input"
              placeholder="이름"
              name="username"
              onChange={onChange}
              value={username}
            />
          </Grid>
        </Grid>
        <ApplyButton name="구독 신청하기" onClick={handleApply} />
      </div>
    </Box>
  );
};

export default ApplyContainer;
