import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 800px;
`;
function PrintMap() {
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
        options={{
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  saturation: 36,
                },
                {
                  color: "#000000",
                },
                {
                  lightness: 60,
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 20,
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 17,
                },
                {
                  weight: 1.2,
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 29,
                },
                {
                  weight: 0.2,
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 38,
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 16,
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 50,
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 17,
                },
              ],
            },
          ],
        }}
      ></GoogleMapReact>
    </Container>
  );
}

export default PrintMap;
