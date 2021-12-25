import React from "react";
import { CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material';
import momAriTree from '../../../../../assets/images/gallery/IMG_6351.jpeg'

const MemoriesPageInfo = () => {
  return (
    <div>
      <Paper sx={{ maxWidth: 350 }}>
        <CardHeader
          title="Memories Page"
          subheader="The visual representation of my love for you"
        />
        <CardMedia
          component="img"
          src={momAriTree}
          height="380"
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