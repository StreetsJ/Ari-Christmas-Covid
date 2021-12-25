import React from "react";
import { 
  Button,
  CardActions, 
  CardContent, 
  CardHeader, 
  CardMedia, 
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import JamesAriFamily from '../../../../../assets/images/gallery/Michael+Ari-5_Original.jpeg'

const HomePageInfo = () => {
  return (
    <Paper sx={{ maxWidth: 350 }}>
      <CardHeader
        title="Home Page"
        subheader="The origin of my love for you"
      />
      <CardMedia 
        component="img" 
        src={JamesAriFamily} 
        height="380" 
        alt="JamesAriFamily"
      />
      <CardContent>
        <Typography variant="body1">
          This page is the start to navigating through our love over the past 8 months.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button 
          onClick={()=>{
            console.log("Click");
          }} 
          color="secondary"
        >
          Start Here
        </Button>
      </CardActions>
    </Paper>
  )
}

export default HomePageInfo;