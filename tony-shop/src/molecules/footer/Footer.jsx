/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const [color, setColor] = React.useState('neutral');
  return (
    <>
      <Sheet
        variant="solid"
        color={color}
        invertedColors
        sx={{
          ...(color !== 'neutral' && {
            bgcolor: `${color}.800`
          }),
          flexGrow: 1,
          p: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            // alignItems: { md: 'flex-start' },
            justifyContent: 'center',
            // justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <List size="sm" orientation="horizontal" wrap sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}>
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
                {/* <List sx={{ '--ListItemDecorator-size': '32px', alignItems: 'center' }}> */}
                <ListItem>
                  <ListItemButton component="a" href="#">
                    Registrate
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
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
                  <ListItemButton component="a" href="#" sx={{ flexGrow: 1 }}>
                    <WhatsAppIcon />
                    Consultas
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    <FmdGoodIcon />
                    Tienda
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="#">
                    <InstagramIcon />
                    Tony's moto shop
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
            gap: 2,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Typography>©Tony's Motos Shop 2023. All Rights Reserved.</Typography>
          <Divider orientation="vertical" />
          <ListItemButton component="a" href="#">
            Web Services desing
          </ListItemButton>
        </Box>
      </Sheet>
    </>
  );
};

export default Footer;
