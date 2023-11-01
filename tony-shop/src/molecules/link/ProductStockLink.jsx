import React from 'react';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/material/Typography';
import { mainColors } from '@services/utils/static.data';

const ProductStockLink = (prop) => {
  const { data, amount, href, click, functionOnClick } = prop;
  const { darkBlue, strongRed } = mainColors;

  return (
    <>
      {click ? (
        <ListItemButton
          color="string"
          component="a"
          href={href || '#'}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: darkBlue,
            background: 'transparent',
            '&:hover': {
              color: strongRed
            }
          }}
          onClick={functionOnClick}
        >
          {data}
          <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}> ({amount})</Typography>
        </ListItemButton>
      ) : (
        <ListItemButton
          color="string"
          component="a"
          href={href || '#'}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: darkBlue,
            background: 'transparent',
            '&:hover': {
              color: strongRed
            }
          }}
        >
          {data}
          <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}> ({amount})</Typography>
        </ListItemButton>
      )}
    </>
  );
};

export default ProductStockLink;
