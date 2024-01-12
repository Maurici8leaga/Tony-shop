import React from 'react';
// component
import ImageGallery from '@molecules/image-Gallery/ImageGallery';
// cosas para el menu
import Card from '@mui/joy/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import CardContent from '@mui/joy/CardContent';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/joy/CardActions';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// css
import '../CardProduct-adaptive/CardProductAdaptive.scss';

const CardProductAdaptive = (prop) => {
  const { titleProduct, productPrice, avgRate, qtyProduct, priceDelivery, imgsProduct, qtySelected, SetqtySelected } =
    prop;

  const addProduct = () => {
    SetqtySelected(qtySelected + 1);
    // aqui hay que agregar logica para que tampoco supere el limite que hay en el stock de la db
  };

  const minusProduct = () => {
    if (qtySelected > 1) {
      SetqtySelected(qtySelected - 1);
    } else {
      SetqtySelected(1);
    }
  };

  return (
    <Card variant="outline" color="neutral" sx={{ minHeight: 'auto', width: '100%' }}>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          marginBottom: '1rem'
        }}
      >
        <Typography variant="h6">{titleProduct} </Typography>
      </Stack>

      <ImageGallery images={imgsProduct} />

      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" sx={{ marginBottom: '.5rem', fontWeight: 'lighter' }}>
            US$ {productPrice}
          </Typography>

          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            color="neutral"
            sx={{
              borderRadius: '50%',
              transform: 'translateY(0%)',
              '&:hover': { color: 'red' }
            }}
          >
            <Favorite />
          </IconButton>
        </Stack>

        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Typography variant="caption" sx={{ color: 'grey' }}>
            {avgRate}
          </Typography>
          <Rating name="rating-product" value={avgRate} readOnly />
          <Typography variant="caption" sx={{ color: 'grey' }}>
            ({qtyProduct})
          </Typography>
        </Stack>

        <Typography variant="body1" sx={{ marginTop: '.5rem' }}>
          Envio {`${priceDelivery || 'Gratis'}`}
        </Typography>
      </CardContent>

      <CardActions orientation="vertical" className="card-action-section" sx={{ padding: '18px', zIndex: 10 }}>
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={1}>
          <Stack direction="column">
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ marginBottom: '.5rem' }}
            >
              <IconButton size="small" color="primary" onClick={addProduct}>
                <AddCircleOutlineIcon />
              </IconButton>

              <Typography variant="body2">{qtySelected}</Typography>
              {/* // OJO el max debe ir con respecto a lo que se tenga en la base de datos */}

              <IconButton size="small" color="primary" disabled={qtySelected === 1 && true} onClick={minusProduct}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Stack>
            <Typography variant="caption" sx={{ color: 'grey' }}>
              ({qtyProduct} disponibles)
            </Typography>
          </Stack>

          <Button variant="contained" size="large" sx={{ mb: 2 }} endIcon={<ShoppingCartIcon />}>
            Agregar al carrito
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CardProductAdaptive;
