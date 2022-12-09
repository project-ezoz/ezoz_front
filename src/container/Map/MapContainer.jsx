import React from "react";
import Grid from "@mui/material/Grid";
import MapSideContainer from "./MapSideContainer";
import PrintMap from "../../components/Map/PrintMap";
const MapContainer = () => {
  return (
    <Grid container spacing={0}>
      <Grid xs={6} md={2}>
        <MapSideContainer />
      </Grid>
      <Grid xs={6} md={10}>
        <PrintMap />
      </Grid>
    </Grid>
  );
};

export default MapContainer;
