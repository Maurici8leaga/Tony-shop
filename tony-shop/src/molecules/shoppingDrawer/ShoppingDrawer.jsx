import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import BottomNavigation from '@mui/material/BottomNavigation';
import Stack from '@mui/material/Stack';
import AspectRatio from '@mui/joy/AspectRatio';
import Container from '@mui/material/Container';

import { mainColors } from '@services/utils/static.data';

const ShopingDrawer = (prop) => {
  const { darkBlue, lightBlue, lightWhite } = mainColors;

  const { openShoppingDrawer, setOpenShoppingDrawer } = prop;

  return (
    <>
      <Drawer open={openShoppingDrawer} anchor="right" onClose={() => setOpenShoppingDrawer(false)}>
        <Box sx={{ width: '350px' }}>
          <nav>
            <List>
              <ListItem>
                <IconButton onClick={() => setOpenShoppingDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </ListItem>

              <ListItem sx={{ display: 'block' }}>
                <Typography variant="h6" align="center" sx={{ color: `${darkBlue}` }}>
                  Tu Carrito
                </Typography>
              </ListItem>
              <Divider />

              <Container fixed>
                <Card invertedColors={false} orientation="horizontal" size="sm" variant="outline">
                  <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img src="https://mzbusinessglobal.com/wp-content/uploads/2022/05/13080-17.jpg" alt="" />
                  </AspectRatio>
                </Card>
              </Container>

              {/* botom de pago */}
              <Stack sx={{ width: '240px', position: 'absolute' }}>
                <BottomNavigation>
                  {/* BottomNavigaation permite centrar el elemento en el medio del drawer para asi poder colocar
                  el elemento al fondo del drawer */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'block',
                      position: 'relative',
                      top: 0,
                      bottom: 0,
                      left: 55,
                      right: 0
                    }}
                  >
                    <Stack spacing={2}>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{ bgcolor: `${lightBlue}`, color: `${lightWhite}` }}
                        endIcon={<ShoppingCartIcon />}
                      >
                        Ir a pagar
                      </Button>
                    </Stack>
                  </Box>
                </BottomNavigation>
              </Stack>

              {/* <Box sx={{ width: '80%', display: 'block' }}>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ bgcolor: `${lightBlue}`, color: `${lightWhite}` }}
                    endIcon={<ShoppingCartIcon />}
                  >
                    Ir a pagar
                  </Button>
                </Stack>
              </Box> */}
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default ShopingDrawer;
