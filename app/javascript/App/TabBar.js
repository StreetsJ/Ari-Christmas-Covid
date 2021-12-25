import React, { useState } from 'react';
import { Tabs, Tab, Button, Card, Box } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from "react-router-dom"

const TabBar = (props) => {
  const tabValue = props.tabValue;

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.paper',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 1,
        width: '94%',
        mx: 'auto',
      }}
    >
      <Tabs 
        value={tabValue}
        indicatorColor='secondary'
        textColor='secondary' 
        aria-label="icon label tabs example" 
        centered
      >
        <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
        <Tab icon={<VideoLibraryIcon />} label="Memories" component={Link} to="/memories" />
        <Tab icon={<FavoriteIcon/>} label="Send Your Love" component={Link} to="/send-your-love" />
      </Tabs>
    </Box>
  );
}

export default TabBar;