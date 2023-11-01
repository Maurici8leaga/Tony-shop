import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';
import Rating from '@mui/material/Rating';

const Ratings = (prop) => {
  const { stars, mount } = prop;

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>
      <Rating name="rating-product" value={stars} readOnly sx={{ mt: 1, mb: 1 }} />
      <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>({mount})</Typography>
    </Stack>
  );
};

export default Ratings;
