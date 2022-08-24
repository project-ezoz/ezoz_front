import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  background-color: black;
  height: 40rem;
  margin-bottom: 5rem;
`;

const MapButton = styled.div`
  background-color: #00dc5f;
  color: black;
`;

const Title = styled.div`
  color: white;
  top: 30%;
  left: 40%;
`;

const Img = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -15.5%, #000000 120.2%);
`;

const PostMap = () => {
  return (
    <MapContainer>
      <Title>새로운 오지를 경험하고 싶으신가요?</Title>
      <Title>EZOZ에서 탐색해보세요</Title>
    </MapContainer>
  );
};

export default PostMap;
