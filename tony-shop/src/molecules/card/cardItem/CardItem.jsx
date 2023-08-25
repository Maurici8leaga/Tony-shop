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

const CardItem = (prop) => {
  const { imgProduct, nameProduct, priceProduct, descriptionProduct } = prop;

  return (
    <>
      <Card
        sx={{
          width: 320,
          boxShadow: 'lg',
          borderRadius: 'none',
          gridColumn: 'span 2',
          flexDirection: 'col',
          flexWrap: 'wrap',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            transform: 'translateY(-2px)'
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
        }}
      >
        <CardOverflow>
          <AspectRatio ratio="4/3" sx={{ minWidth: 200, minHeight: 200 }}>
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
              bottom: '75%',
              transform: 'translateY(0%)',
              '&:hover': { color: 'red' }
            }}
          >
            <Favorite />
          </IconButton>
        </CardOverflow>

        {/* <CardContent orientation="vertical"> */}
        <CardContent sx={{ marginTop: '10%', marginBottom: '5%' }}>
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
        </CardContent>

        <Button variant="outlined" size="lg">
          Agregar al carrito
        </Button>
      </Card>
    </>
  );
};

export default CardItem;
