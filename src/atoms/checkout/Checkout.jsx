import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/material/Checkbox';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from '@mui/material/IconButton';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
// component
import CardDetailsCheckout from '@molecules/card/card-details-checkout/CardDetailsCheckout';
// css
import '../checkout/Checkout.scss';

// OJO FALTA AGREGAR LOGICA PARA SELECCIONAR SOLO UN METODO DE RETIRO, INCORPORAR DATA DE LA DB
// LOGICA PARA METODO DE PAGO

const Checkout = () => {
  const [cashBtn, setCashBtn] = useState(false);
  const [mobilBtn, setMobilBtn] = useState(false);

  const handledClick1 = () => {
    setCashBtn(true);
    setMobilBtn(false);
  };

  const handledClick2 = () => {
    setCashBtn(false);
    setMobilBtn(true);
  };

  return (
    <div className="container-checkout">
      <Container fixed>
        <div className="container-grid-checkout ">
          <div className="info-checkout">
            <Typography variant="h5" sx={{ width: '100%', marginY: '1rem' }}>
              {' '}
              Resumen de tu compra
            </Typography>

            <Typography variant="body1" sx={{ marginY: '1rem' }}>
              Forma de entrega
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%', height: '60px', backgroundColor: '#fff', marginY: '.5rem', padding: '10px' }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                <Stack direction="row" alignItems="center" gap={3}>
                  <StorefrontOutlinedIcon />

                  <Typography variant="body2">Retirar en tienda</Typography>
                </Stack>

                <Box
                  sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl', // este hace que el checkbox quede mejor verticalmente
                    textAlign: 'center'
                  }}
                >
                  {/* hay que agregar logica para que solo pueda hacer click a una checkbox */}
                  <Checkbox />
                </Box>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%', height: '60px', backgroundColor: '#fff', marginY: '.5rem', padding: '10px' }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                <Stack direction="row" alignItems="center" gap={3}>
                  <LocationOnOutlinedIcon />

                  <Typography variant="body2">
                    {/* esta debe venir de las direcciones guardadas de la db, si no existe una debe agregar una */}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor.
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl', // este hace que el checkbox quede mejor verticalmente
                    textAlign: 'center'
                  }}
                >
                  {/* hay que agregar logica para que solo pueda hacer click a una checkbox */}
                  <Checkbox />
                </Box>
              </Stack>
            </Stack>

            <Typography variant="body1" sx={{ marginY: '1rem' }}>
              Forma de pago
            </Typography>

            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3}>
              <Stack direction="row" alignItems="center" gap={1}>
                <IconButton color={`${cashBtn ? 'success' : 'default'}`} onClick={handledClick1}>
                  <PaymentsOutlinedIcon />
                </IconButton>
                <Typography>Efectivo</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" gap={1}>
                <IconButton color={`${mobilBtn ? 'primary' : 'default'}`} onClick={handledClick2}>
                  <PhoneIphoneOutlinedIcon />
                </IconButton>
                <Typography>Pago movil</Typography>
              </Stack>
            </Stack>
          </div>
          <aside className="details-list ">
            <CardDetailsCheckout
              // esta data debe venir de la db
              imgProduct={'https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275'}
              titleProduct={'Casco Integral Hro518 Cremer...'}
              qtyProduct={1}
              priceProduct={11.11}
            />
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
