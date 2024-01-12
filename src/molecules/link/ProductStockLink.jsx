import React from 'react';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/material/Typography';

const ProductStockLink = (prop) => {
  const { data, amount, href, click, functionOnClick } = prop;

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
            color: 'var(--darkBlue)',
            background: 'transparent',
            '&:hover': {
              color: 'var(--red)'
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
            color: 'var(--darkBlue)',
            background: 'transparent',
            '&:hover': {
              color: 'var(--red)'
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
