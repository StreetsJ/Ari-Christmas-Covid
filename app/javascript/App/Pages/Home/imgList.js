import React from "react";
import { Box, ImageList, ImageListItem } from '@mui/material';
import images from "../../../../assets/images/gallery";

const HomePageImageList = () => {

  return (
    <Box sx={{ justifyContent: 'center', width: 800, height: 500, overflowY: 'scroll' }}>
      <br />
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((img, index) => (
          <ImageListItem key={index}>
            <img
              src={`${img}?w=248&fit=crop&auto=format`}
              srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
} 

export default HomePageImageList