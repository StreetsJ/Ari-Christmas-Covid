import React, { Fragment } from "react";
import { Box, CardHeader, Grid, Paper, Stack, Divider, Typography, Card } from "@mui/material";
import TabBar from '../../TabBar';
import HomePageInfo from "./Cards/HomePageInfo";
import MemoriesPageInfo from "./Cards/MemoriesPageInfo";
import FirstTimeMeeting from '../../../../assets/images/FirstTimeMeeting.PNG'

const HomePage = () => {
  return (
    <Fragment>
      <header>
        <TabBar tabValue={0} />
      </header>
      <br />

      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Stack spacing={10} direction="column">
                <Stack spacing={5} direction="row" sx={{ mx: 'auto' }}>
                  <HomePageInfo />
                  <Divider orientation="vertical" flexItem />
                  <MemoriesPageInfo />
                </Stack>
                <Divider orientation="horizontal" flexItem />
                <Card>
                  <CardHeader 
                    title="THE FIRST TIME WE MET"                    
                  />
                </Card>
                <Stack spacing={5} direction="row">
                    <img
                      src={FirstTimeMeeting}
                      width="340"
                      height="400"
                      alt="Map Screenshot First Time Meeting"
                    />
                    <Divider orientation="vertical" flexItem />
                    <img
                      src={FirstTimeMeeting}
                      width="340"
                      height="400"
                      alt="Map Screenshot First Time Meeting"
                    />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default HomePage;