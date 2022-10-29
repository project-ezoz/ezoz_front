import React from "react";
import styled from "styled-components";
import mapImg from "../../assets/map.png";
import { Link } from "react-router-dom";

const MapContainer = styled.div`
  background-color: black;
  height: 45rem;
  width: 100%;
`;

const Left = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  height: 100%;
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  box-sizing: border-box;
  display: flex;
`;

const MapButton = styled(Link)`
  background-color: #00dc5f;
  color: black;
  width: 100px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Map = styled.img`
  width: 100%;
  height: 100%;
`;

const Center = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
`;

const HomeMap = () => {
  return (
    <MapContainer>
      <Left>
        <Center>
          <Title>
            새로운 오지를 경험하고 싶으신가요?<br></br>EZOZ에서 탐색해보세요
          </Title>
          <MapButton to="/map">MAP</MapButton>
        </Center>
      </Left>
      <Right>
        <Map src={mapImg} />
      </Right>
    </MapContainer>
  );
};

export default HomeMap;
