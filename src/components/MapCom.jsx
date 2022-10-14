import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 800px;
`;
function MapCom() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
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
      ></GoogleMapReact>
    </Container>
  );
}

export default MapCom;
