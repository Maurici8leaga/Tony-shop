import React from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const ListCategory = (prop) => {
  const { width, href, image, name } = prop;
  return (
    <>
      <Grid component="li" xs={6} sm={4} md={3} lg={2} item sx={{ justifyContent: 'center' }}>
        <Card sx={{ minWidth: width, borderRadius: '3px' }}>
          <CardOverflow component="a" href={href}>
            <AspectRatio objectFit="contain">
              <img src={image} alt={`img_${name}`} />
            </AspectRatio>
          </CardOverflow>

          <CardContent sx={{ bgcolor: 'none' }}>
            <Typography level="title-md" fontWeight="sm" textColor="#000" sx={{ textAlign: 'center' }}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ListCategory;
