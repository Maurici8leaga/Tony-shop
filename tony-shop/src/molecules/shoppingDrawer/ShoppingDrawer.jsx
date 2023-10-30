import * as React from 'react';
// components
import HorizontalCard from '@molecules/card/horizontalCard/HorizontalCard';
// material UI components
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/joy/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// static data
import { mainColors, imgPruebaProduct } from '@services/utils/static.data';

const ShopingDrawer = (prop) => {
  const { darkBlue, lightBlue } = mainColors;

  const { openShoppingDrawer, setOpenShoppingDrawer } = prop;

  // DUDAS SOBRE USAR ESTE HOOk
  const inputRef = React.useRef(null);
  // el hook useRef permite tener consistencia con el valor del input en que se implemente despues de cada renderizado

  return (
    <Drawer open={openShoppingDrawer} anchor="right" onClose={() => setOpenShoppingDrawer(false)}>
      <Container fixed sx={{ my: 2, width: '350px' }}>
        <Stack>
          <Stack direction="row" justifyContent="start" alignItems="center">
            <IconButton onClick={() => setOpenShoppingDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Typography variant="h6" align="center" sx={{ color: `${darkBlue}` }}>
            Tu carro de compras
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <List sx={{ height: { xs: '450px', sm: '500px', md: '600px' }, overflowY: 'scroll' }}>
          {/* aqui se va a repetir esto por cada item que se anada */}
          <ListItem>
            <HorizontalCard
              inputRef={inputRef}
              imgProduct={imgPruebaProduct}
              nameProduct={'Casco'}
              priceProduct={11.11}
            />
          </ListItem>
        </List>

        {/* botom de pago */}
        <Stack sx={{ width: '85%', position: 'absolute', marginY: '1rem' }}>
          <Box
            sx={{
              display: 'block',
              position: 'relative',
              top: 30,
              left: { xs: 3, sm: 0 }
            }}
          >
            <Stack direction={'row'} sx={{ py: 2, color: `${lightBlue}` }}>
              {/* falta gregar logica para calcular todo el valor total del producto */}
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Subtotal:
              </Typography>

              {/* aqui debe ir el monto total de lo que tenga en el carrito */}
              <Typography variant="h6"> $ 11.11</Typography>
            </Stack>

            <Stack spacing={2}>
              <Button
                component="a"
                variant="contained"
                size="large"
                href="/checkout"
                sx={{ mb: 2 }}
                color="success"
                endIcon={<ShoppingCartIcon />}
              >
                Ir a pagar
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Drawer>
  );
};

export default ShopingDrawer;
