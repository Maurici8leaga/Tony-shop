/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
// components
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// static
import { mainColors, tonyShopDataInfo } from '@services/utils/static.data';

const Footer = () => {
  const { lightBlue, lightWhite } = mainColors;
  const { instagram, googleMaps } = tonyShopDataInfo;

  return (
    <>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          bgcolor: lightBlue,
          flexGrow: 1,
          p: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <List size="sm" orientation="horizontal" wrap sx={{ flexGrow: 0 }}>
            <ListItem nested sx={{ width: { xs: '33%', md: 160 }, alignItems: 'center' }}>
              <ListSubheader>Productos</ListSubheader>
              <List sx={{ alignItems: 'center' }}>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    Accesorios
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    Modelos
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    En ofertas
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    Popular
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    Categorias
                  </ListItemButton>
                </ListItem>
              </List>
            </ListItem>

            <ListItem nested sx={{ width: { xs: '33%', md: 160 }, alignItems: 'center' }}>
              <ListSubheader>Cuenta</ListSubheader>
              <List sx={{ alignItems: 'center' }}>
                <ListItem>
                  <ListItemButton component="a" href="/register">
                    Registrate
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="/login">
                    Ingresar
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    Compras
                  </ListItemButton>
                </ListItem>
              </List>
            </ListItem>

            <ListItem nested sx={{ width: { xs: '33%', md: 160 }, alignItems: 'center' }}>
              <ListSubheader>Contacto</ListSubheader>
              <List sx={{ alignItems: 'center' }}>
                <ListItem>
                  <ListItemButton component="a" href={instagram}>
                    <InstagramIcon />
                    Tony's moto shop
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton component="a" href="#" sx={{ flexGrow: 1 }}>
                    <WhatsAppIcon sx={{ color: 'green' }} />
                    Consultas
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton component="a" href={googleMaps}>
                    <FmdGoodIcon sx={{ color: 'red' }} />
                    Tienda
                  </ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <List size="sm" orientation="horizontal" wrap sx={{ flexGrow: 0, alignContent: 'center' }}>
            <ListItem nested sx={{ width: { xs: '100%', md: 400 }, alignItems: 'center' }}>
              <Typography variant="p" sx={{ color: lightWhite }}>
                ©Tony's Motos Shop 2023. All Rights Reserved.
              </Typography>
            </ListItem>
            <Divider orientation="vertical" />
            <ListItem nested sx={{ width: { xs: '100%', md: 250 }, alignItems: 'center' }}>
              <ListItemButton component="a" href="#" sx={{ justifyContent: 'center' }}>
                Web Services desing
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </>
  );
};

export default Footer;
