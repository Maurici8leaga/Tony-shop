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
import BottomNavigation from '@mui/material/BottomNavigation';
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
    <>
      <Drawer open={openShoppingDrawer} anchor="right" onClose={() => setOpenShoppingDrawer(false)}>
        <Box component="nav" sx={{ width: '350px' }}>
          <List>
            <ListItem>
              <IconButton onClick={() => setOpenShoppingDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </ListItem>

            <ListItem sx={{ display: 'block' }}>
              <Typography variant="h6" align="center" sx={{ color: `${darkBlue}` }}>
                Tu carro de compras
              </Typography>
            </ListItem>
            <Divider sx={{ my: 2 }} />

            <Container fixed sx={{ my: 2 }}>
              {/* possible products */}
              <HorizontalCard
                inputRef={inputRef}
                imgProduct={imgPruebaProduct}
                nameProduct={'Casco'}
                priceProduct={11.11}
              />

              {/* botom de pago */}
              <Stack sx={{ width: '85%', position: 'absolute' }} direction={'column'} spacing={10}>
                <BottomNavigation>
                  {/* BottomNavigaation permite centrar el elemento en el medio del drawer para asi poder colocar
                  el elemento al fondo del drawer */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'block',
                      position: 'relative',
                      top: 30,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }}
                  >
                    <Stack direction={'row'} sx={{ py: 2, color: `${lightBlue}` }}>
                      {/* subtotal */}
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Subtotal:
                      </Typography>

                      {/* aqui debe ir el monto total de lo que tenga en el carrito */}
                      <Typography variant="h6"> $$$ </Typography>
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
                </BottomNavigation>
              </Stack>
            </Container>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default ShopingDrawer;
