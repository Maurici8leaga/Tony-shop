import React from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
// static
import { listCategory } from '@services/utils/static.data';

const ListCategory = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container component="ul" spacing={2} sx={{ listStyleType: 'none', flexGrow: 1 }}>
          {listCategory.map((item) => (
            <Grid component="li" key={item.id} xs={6} sm={4} md={3} lg={2} item sx={{ justifyContent: 'center' }}>
              <Card sx={{ minWidth: 100, borderRadius: '3px' }}>
                <CardOverflow component="a" href="#">
                  <AspectRatio objectFit="contain">
                    <img src={item.icon} alt="" />
                  </AspectRatio>
                </CardOverflow>

                <CardContent sx={{ bgcolor: 'none' }}>
                  <Typography level="title-md" fontWeight="sm" textColor="#000" sx={{ textAlign: 'center' }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ListCategory;
