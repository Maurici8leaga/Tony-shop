import React, { useState } from 'react';
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

// cosas para la img
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';

// css
import '../product-description/Product.scss';

const Product = () => {
  const { idProduct } = useParams();

  const imgPrueba = {
    img1: 'https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vW2ZGX96EGYANmWC0lf5hMP15jAGuV-K9fb0GQoUhnwLNOybsrAuJBRp_YpPQNzP6Pk&usqp=CAU',
    img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7xhvZAEtfZBmxQGVGHWGJRWBp3I0sFV3SYPn9zqjQofUerr6UYaFBQsyQ_N_lqWt3Z0&usqp=CAU',
    img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSyB0T6VoY4C2hudY6QUdpQTJVt2ppuCyjomDNqUJf20x3SrvQMxzU_FG8jQKdMFGr3E&usqp=CAU'
  };

  const [ImgProduct, setImgProduct] = useState(imgPrueba.img1);
  const [qty, Setqty] = useState(1);

  const showImgProduct = (img) => {
    setImgProduct(img);
  };

  const addProduct = () => {
    Setqty(qty + 1);
    // aqui hay que agregar logica para que tampoco supere el limite que hay en el stock de la db
  };

  const minusProduct = () => {
    if (qty > 1) {
      Setqty(qty - 1);
    } else {
      Setqty(1);
    }
  };

  return (
    <div className="bg-container-grid">
      <Container fixed>
        <div className="container-prueba ">
          <div className="img-product">
            <AspectRatio objectFit="contain" minHeight={500}>
              <img srcSet={ImgProduct} alt="image of product" />
              <Stack
                direction={'row'}
                justifyContent="center"
                alignItems="center"
                gap={2}
                sx={{ marginTop: '.5rem', position: 'absolute', bottom: '5px', left: '50%', right: '50%' }}
              >
                <Avatar
                  // OJO agregar el nombre del producto al ALT
                  alt="Image product Sharp"
                  variant="outlined"
                  src={imgPrueba.img1}
                  size="lg"
                  sx={{
                    cursor: 'pointer',
                    border: `${ImgProduct === imgPrueba.img1 ? '1px solid var(--red)' : '1px solid #bdbdbd'}`,
                    '&:hover': { border: '1px solid var(--red)' }
                  }}
                  onClick={() => showImgProduct(imgPrueba.img1)}
                />
                <Avatar
                  alt="Remy Sharp"
                  variant="outlined"
                  src={imgPrueba.img2}
                  size="lg"
                  sx={{
                    cursor: 'pointer',
                    border: `${ImgProduct === imgPrueba.img2 ? '1px solid var(--red)' : '1px solid #bdbdbd'}`,
                    '&:hover': { border: '1px solid var(--red)' }
                  }}
                  onClick={() => showImgProduct(imgPrueba.img2)}
                />
                <Avatar
                  alt="Remy Sharp"
                  variant="outlined"
                  src={imgPrueba.img3}
                  size="lg"
                  sx={{
                    cursor: 'pointer',
                    border: `${ImgProduct === imgPrueba.img3 ? '1px solid var(--red)' : '1px solid #bdbdbd'}`,
                    '&:hover': { border: '1px solid var(--red)' }
                  }}
                  onClick={() => showImgProduct(imgPrueba.img3)}
                />
                <Avatar
                  alt="Remy Sharp"
                  variant="outlined"
                  src={imgPrueba.img4}
                  size="lg"
                  sx={{
                    cursor: 'pointer',
                    border: `${ImgProduct === imgPrueba.img4 ? '1px solid var(--red)' : '1px solid #bdbdbd'}`,
                    '&:hover': { border: '1px solid var(--red)' }
                  }}
                  onClick={() => showImgProduct(imgPrueba.img4)}
                />
              </Stack>
            </AspectRatio>
          </div>
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
                    borderRadius: '50%',
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
                  <IconButton size="small" color="primary" onClick={addProduct}>
                    <AddCircleOutlineIcon />
                  </IconButton>

                  <Typography variant="body2">{qty}</Typography>
                  {/* // OJO el max debe ir con respecto a lo que se tenga en la base de datos */}

                  <IconButton size="small" color="primary" disabled={qty === 1 && true} onClick={minusProduct}>
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
