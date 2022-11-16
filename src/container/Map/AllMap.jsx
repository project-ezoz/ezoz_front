import React from "react";
import MapCom from "../../components/Map/MapCom";
import MapSideCom from "../../components/Map/MapSideCom";
import Grid from "@mui/material/Grid";
function AllMap() {
  return (
    <Grid container spacing={0}>
      <Grid xs={6} md={2}>
        <MapSideCom />
      </Grid>
      <Grid xs={6} md={10}>
        <MapCom />
      </Grid>
    </Grid>
  );
}

export default AllMap;
