import React from "react";
import styled from "styled-components";

const ImgBox = styled.img`
  width: 100%;
  vertical-align: middle;
`;
const Text = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;
const Box = styled.div`
  background: url(/assets/auth.png);
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgContent = () => {
  return (
    <Box>
      <Text>
        일상과 다른 새로운 경험을 찾는
        <br /> 사람들을 위한 오지 컨텐츠 서비스
      </Text>
    </Box>
  );
};

export default ImgContent;
