import * as React from 'react';
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
// components
import HorizontalCard from '@molecules/card/horizontalCard/HorizontalCard';
import EmptyShoppingCar from '@molecules/empty-message/empty-shopping-car/EmptyShoppingCar';
// static data
import { arrayFakeShoppingCar } from '@services/utils/static.data';
// css
import '../shoppingDrawer/ShoppingDrawer.scss';

const ShopingDrawer = (prop) => {
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

          <Typography variant="h6" align="center" sx={{ color: 'var(--darkBlue)' }}>
            Tu carro de compras
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* OJO sustituir tambien aca */}
        <List
          sx={{
            height: { xs: '60vh', sm: '70vh', md: '65vh' },
            overflowY: `${arrayFakeShoppingCar.length > 0 ? 'scroll' : 'hidden'}`
          }}
        >
          {/* actualizar este condicional con la data que debe venir del store o de la db */}
          {arrayFakeShoppingCar.length > 0 ? (
            arrayFakeShoppingCar.map((e) => (
              <ListItem key={e.id}>
                <HorizontalCard inputRef={inputRef} imgProduct={e.img} nameProduct={'Casco'} priceProduct={e.price} />
              </ListItem>
            ))
          ) : (
            <EmptyShoppingCar />
          )}
        </List>

        {/* botom de pago */}
        {/* OJO IGUAL sustituir por la verdadera data que viene del store o db */}
        {arrayFakeShoppingCar.length > 0 ? (
          <Stack sx={{ position: 'relative', top: { xs: 30, sm: 20, md: 30 } }}>
            <Box className="subtotal-container">
              <Stack direction={'row'} sx={{ py: 2, color: 'var(--blue)' }}>
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
        ) : null}
      </Container>
    </Drawer>
  );
};

export default ShopingDrawer;
