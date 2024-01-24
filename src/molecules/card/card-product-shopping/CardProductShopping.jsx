import React from 'react';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';

const CardProductShopping = (prop) => {
  // HAY QUE AASEGURAR QUE TODA ESTA DATA SIEMPRE ESTE DISPONIBLE

  const { imgProduct, titleProduct, idProduct, purchased, delivered, direction, status } = prop;
  return (
    <Card color="neutral" orientation="horizontal" variant="outlined" sx={{ width: '100%' }}>
      <AspectRatio ratio="1" sx={{ width: 90, alignSelf: 'center' }}>
        <img
          srcSet={imgProduct}
          loading="lazy"
          alt="img-product" // colorcar un alt org en la db
        />
      </AspectRatio>

      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2">{titleProduct}</Typography>

          <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>
            {/* ver si se usa el id del product o otro id unico */}
            Nº {idProduct}
          </Typography>
        </Stack>
        <Divider sx={{ marginY: '.5rem' }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: '.5rem' }}>
          <Typography variant="body2">Fecha de compra: {purchased}</Typography>

          <Divider orientation="vertical" sx={{ marginX: '.5rem' }} />

          <Typography variant="body2">Fecha de entrega: {delivered}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{direction}</Typography>
          <Chip variant="outlined" color={`${status ? 'success' : 'danger'}`} size="sm" sx={{ pointerEvents: 'none' }}>
            {status ? 'Entregado' : 'En camino'}
          </Chip>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardProductShopping;