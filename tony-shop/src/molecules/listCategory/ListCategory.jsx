import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const ListCategory = (prop) => {
  const { width, href, image, name, bpXs, bpSm, bpMd, bpLg, objectFit } = prop;
  return (
    <>
      <Grid
        component="li"
        xs={`${bpXs || 6}`}
        sm={`${bpSm || 4}`}
        md={`${bpMd || 3}`}
        lg={`${bpLg || 2}`}
        item
        sx={{ justifyContent: 'center' }}
      >
        <Card sx={{ minWidth: width, borderRadius: '3px' }}>
          <CardOverflow component="a" href={href} sx={{ borderBottom: '1px solid #eaeaea' }}>
            <AspectRatio objectFit={`${objectFit || 'cover'}`}>
              <img src={image} alt={`img_${name}`} />
            </AspectRatio>
          </CardOverflow>

          <CardContent sx={{ bgcolor: 'none' }}>
            <Typography
              level="title-md"
              fontWeight="md"
              sx={{ textAlign: 'center', textTransform: 'uppercase', color: 'var(--darkBlue)' }}
            >
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ListCategory;
