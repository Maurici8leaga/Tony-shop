import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';

// cosas para el menu
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Favorite from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';

// css
import '../product-description/Product.scss';
import { grey } from '@mui/material/colors';

const Product = () => {
  const { idProduct } = useParams();

  return (
    <div className="bg-container-grid">
      <Container fixed>
        <div className="container-prueba ">
          <div className="img-product">div1</div>
          <div className="menu">
            <Card variant="outline" color="neutral" sx={{ height: 'auto', width: '100%' }}>
              <Stack
                direction={'row'}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{
                  marginBottom: '1rem'
                }}
              >
                <Typography variant="h6">
                  {idProduct} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <IconButton
                  aria-label="Like minimal photography"
                  size="md"
                  variant="solid"
                  color="neutral"
                  sx={{
                    // position: 'absolute',
                    // zIndex: 2,
                    borderRadius: '50%',
                    // right: '1rem',
                    // bottom: '70%',
                    transform: 'translateY(0%)',
                    '&:hover': { color: 'red' }
                  }}
                >
                  <Favorite />
                </IconButton>
              </Stack>

              <CardContent>
                <Typography variant="h4" sx={{ marginBottom: '.5rem', fontWeight: 'lighter' }}>
                  US$ 11.11
                </Typography>

                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                  <Typography variant="caption" sx={{ color: 'grey' }}>
                    3.0
                  </Typography>
                  <Rating name="rating-product" value={3} readOnly />
                  <Typography variant="caption" sx={{ color: 'grey' }}>
                    (10)
                  </Typography>
                </Stack>

                <Typography variant="body1" sx={{ marginTop: '.5rem' }}>
                  Envio Gratis
                </Typography>
              </CardContent>

              <CardActions orientation="vertical">
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                  sx={{ marginBottom: '.5rem' }}
                >
                  <IconButton size="small" color="primary">
                    <AddCircleOutlineIcon />
                  </IconButton>

                  <Input
                    type="number"
                    size="sm"
                    // el defaultValue debe ir con lo que el cliente coloque por primera vez
                    defaultValue={1}
                    // OJO el max debe ir con respecto a lo que se tenga en la base de datos
                    slotProps={{
                      input: {
                        // ref: inputRef,
                        min: 1,
                        max: 10,
                        step: 1
                      }
                    }}
                  />

                  <IconButton size="small" color="primary">
                    <RemoveCircleOutlineIcon />
                  </IconButton>

                  <Typography variant="caption" sx={{ color: 'grey' }}>
                    (10 disponibles)
                  </Typography>
                </Stack>

                <Button variant="contained" size="large" sx={{ mb: 2 }} endIcon={<ShoppingCartIcon />}>
                  Agregar al carrito
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="info">div3</div>
          <div className="pregunta">div4</div>
          <div className="calificacion">div5</div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
