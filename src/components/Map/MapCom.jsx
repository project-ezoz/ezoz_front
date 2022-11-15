import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Marker from "./Marker";
import SpotRequest from "./SpotRequest";

const Container = styled.div`
  width: 100%;
  height: 800px;
`;
function MapCom() {
  const defaultProps = {
    center: {
      lat: 37.49451137331156,
      lng: 126.94584585059987,
    },
    zoom: 11,
  };

  const handleClick = (e) => {
    console.log(e.lat, e.lng);
  };
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
          region: "kr",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleClick}
      >
        <SpotRequest />
      </GoogleMapReact>
    </Container>
  );
}

export default MapCom;
