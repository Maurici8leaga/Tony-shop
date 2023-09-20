import React from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import Ratings from '@molecules/rating/Ratings';

const CardItem = (prop) => {
  const { imgProduct, nameProduct, priceProduct, descriptionProduct, customWidth, customHeight } = prop;

  return (
    <>
      <Card
        sx={{
          width: `${customWidth}`,
          height: `${customHeight}`,
          maxWidth: '100%',
          boxShadow: 'lg',
          borderRadius: 'none'
        }}
      >
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={imgProduct} loading="lazy" alt="" style={{ opacity: 1 }} />
          </AspectRatio>

          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            color="neutral"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '1rem',
              bottom: '70%',
              transform: 'translateY(0%)',
              '&:hover': { color: 'red' }
            }}
          >
            <Favorite />
          </IconButton>
        </CardOverflow>

        <CardContent>
          <Stack direction={'row'} sx={{ alignItems: 'center' }}>
            <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black', flexGrow: 1 }}>
              {/* insertar logica para nombres largos */}
              {nameProduct}
            </Typography>

            <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black' }}>
              ${priceProduct}
            </Typography>
          </Stack>

          <Typography level="body-xs">
            {/* insertar logica para resumir el texto y supere cierta cantidad de caracteres */}
            {descriptionProduct}
          </Typography>

          <Ratings stars={3} mount={1} />
          {/* las stars y el mount tiene que venir del back y pasarse como prop aca */}
        </CardContent>

        <Button variant="outlined" size="lg">
          Agregar al carrito
        </Button>
      </Card>
    </>
  );
};

export default CardItem;
