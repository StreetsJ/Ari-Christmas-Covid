import React from "react";
import TabBar from "../../TabBar";
import { Grid } from "@mui/material";
import HomePageImageList from "../Home/imgList";

const MemoriesPage = () => {
  return (
    <div>
      <header>
        <TabBar tabValue={1} />
      </header>
      <Grid container justifyContent='center'>
        <HomePageImageList />
      </Grid>
    </div>
  )
}

export default MemoriesPage;