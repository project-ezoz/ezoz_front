import "antd/dist/antd.css";
import { Carousel } from "antd";
import styled from "styled-components";
import React from "react";
import b1 from "../../assets/back1.png";
import b2 from "../../assets/back2.png";
import b3 from "../../assets/back3.png";
import { useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";

const Container = styled.div`
  height: 800px;
  position: relative;
  margin-bottom: 5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 800px;
`;

const Text = styled.h2`
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HomeCarousel = () => {
  return (
    <Container>
      <HomeHeader />
      <Text>
        Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.
      </Text>
      <Carousel autoplay>
        <div>
          <Img src={b1} />
        </div>
        <div>
          <Img src={b2} />
        </div>
        <div>
          <Img src={b3} />
        </div>
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
