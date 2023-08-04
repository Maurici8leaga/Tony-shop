import * as React from 'react';

// cosas para el list
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneIcon from '@mui/icons-material/Phone';
import Divider from '@mui/material/Divider';

// cosass para el drawer
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

const NavbarList = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <Box sx={{ width: '250px' }}>
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  Cuenta
                </ListItemButton>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  Carrito
                </ListItemButton>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  Contacto
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarList;
