import React from "react";
import styled from "styled-components";
import PostHeader from "../../components/Home/Post/PostHeader";
import { Grid } from "@mui/material";
import PostContainer from "./Post/PostContainer";

const Page = styled.div`
  width: 100%;
  height: 960px;
`;

const HomePost = () => {
  return (
    <Page>
      <PostHeader />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <PostContainer idx="post1" />
        </Grid>
        <Grid item xs={6}>
          <PostContainer idx="post2" />
        </Grid>
      </Grid>
    </Page>
  );
};

export default HomePost;
