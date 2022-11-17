import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import InterviewContent from "../../components/Home/Interview/InterviewContent";

import InterviewHeader from "../../components/Home/Interview/InterviewHeader";

const Page = styled.div`
  width: 100%;
  height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div``;

const HomeInterview = () => {
  return (
    <Page>
      <Box>
        <InterviewHeader />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InterviewContent idx="peo1" />
          </Grid>
          <Grid item xs={6}>
            <InterviewContent idx="peo2" />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default HomeInterview;
