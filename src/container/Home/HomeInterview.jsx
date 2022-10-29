import React from "react";
import styled from "styled-components";
import peo1 from "../../assets/peo1.png";
import peo2 from "../../assets/peo2.png";
const Title = styled.div`
  font-size: 20px;
`;

const Page = styled.div`
  height: 40rem;
`;
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
const Box = styled.img`
  opacity: 75%;
  width: 20rem;
  height: 25rem;
  text-align: center;
`;
const HomeInterview = () => {
  return (
    <Page>
      <Title>OZ 러너 인터뷰</Title>
      <BoxContainer>
        <GridBox>
          <Box src={peo1} />
          <Box src={peo2} />
        </GridBox>
      </BoxContainer>
    </Page>
  );
};

export default HomeInterview;
