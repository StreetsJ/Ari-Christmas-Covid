import React from "react";
import { CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material';
import momAriTree from '../../../../../assets/images/gallery/IMG_6351.jpeg'
import testmp4 from '../../../../../assets/images/videos/THE video.mp4'
import test2mp4 from '../../../../../assets/images/videos/FlashOfPhotosFromCarInFlorida.MOV'

const MemoriesPageInfo = () => {
  return (
    <div>
      <Paper sx={{ maxWidth: 350 }}>
        <CardHeader
          title="Memories Page"
          subheader="The visual representation of my love for you"
        />
        {/* <CardMedia
          component="img"
          src={momAriTree}
          height="380"
        /> */}
        <CardMedia
          component='video'
          src={testmp4}
          height="380"
          autoPlay
          loop
          controls
        />
        <CardContent>
          <Typography variant="body1">
            This page this the start to navigating through our love over the past 8 months.
          </Typography>
        </CardContent>
      </Paper>
    </div>
  )
}

export default MemoriesPageInfo;