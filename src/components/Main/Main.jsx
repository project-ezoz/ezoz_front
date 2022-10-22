import "antd/dist/antd.css";
import { Carousel } from "antd";
import styled from "styled-components";
import React from "react";
import b1 from "../../assets/back1.png";
import b2 from "../../assets/back2.png";
import b3 from "../../assets/back3.png";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Nav from "../Nav/Nav";

const Container = styled.div`
  width: 1000px;
  background-color: aliceblue;
  position: relative;
  margin-bottom: 5rem;
`;

const Img = styled.img`
  width: 100%;
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

const Menu = styled.div`
  position: absolute;
  display: flex;
  top: 3%;
  right: 3%;
  z-index: 1;
  width: auto;
`;

const Login = styled(Link)`
  font-size: large;
  color: white;
  margin-right: 20px;
  &:hover {
    font-weight: bold;
  }
`;

const Title = styled.h3`
  color: black;
  position: absolute;
  top: 3%;
  left: 3%;
  z-index: 1;
  width: 55;
  height: 20;
`;

const Main = () => {
  const location = useLocation();
  const [isMenu, setMenu] = useState(false);

  const handleNavBar = () => {
    setMenu((isMenu) => !isMenu);
  };
  return (
    <Container>
      <Title>EZOZ</Title>
      <Menu>
        {location.state === null ? (
          <Login to="/login">LOGIN</Login>
        ) : (
          <Login to="/logout">LOGOUT</Login>
        )}

        {isMenu ? <Nav /> : <BsList size="28" onClick={handleNavBar} />}
      </Menu>
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

export default Main;
