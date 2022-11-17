import React from "react";
import styled from "styled-components";
import mapImg from "../../assets/map.png";
import MapButton from "../../components/Home/Map/MapButton";
import MapTitle from "../../components/Home/Map/MapTitle";

const MapContainer = styled.div`
  background-color: black;
  height: 45rem;
  width: 100%;
  height: 960px;
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
          <MapTitle str="새로운 오지를 경험하고 싶으신가요?" />
          <MapTitle str="EZOZ에서 탐색해보세요" />
          <MapButton />
        </Center>
      </Left>
      <Right>
        <Map src={mapImg} />
      </Right>
    </MapContainer>
  );
};

export default HomeMap;
