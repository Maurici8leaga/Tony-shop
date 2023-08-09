/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import SearchBar from '@molecules/searchBar/SearchBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { mainColors, drawerLinks, secondaryColor } from '@services/utils/static.data';

const NavbarList = (prop) => {
  const { darkBlue, lightBlue, lightWhite } = mainColors;
  const { grey400, grey700 } = secondaryColor;

  const { openDrawer, setOpenDrawer } = prop;

  return (
    <>
      <Drawer open={openDrawer} anchor="left" onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: '350px' }}>
          <nav>
            <List>
              <ListItem sx={{ py: 1, display: 'flex', flexDirection: 'row-reverse' }}>
                <IconButton onClick={() => setOpenDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </ListItem>

              <ListItem sx={{}}>
                <SearchBar placeHolderText={'Producto..'} colorbg1={`${grey700}`} colorbg2={`${grey400}`} />
                <Button
                  variant="outlined"
                  sx={{
                    color: `${darkBlue}`,
                    bgcolor: 'none',
                    '&:hover': {
                      color: `${lightWhite}`,
                      bgcolor: `${lightBlue}`
                    },
                    borderColor: `${darkBlue}`
                  }}
                >
                  Buscar
                </Button>
              </ListItem>

              {drawerLinks.map((item) => (
                <div key={item.title}>
                  <ListItem>
                    <IconButton>{item.icon}</IconButton>
                    <ListItemButton component="a" sx={{ color: `${darkBlue}` }}>
                      {item.title}
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarList;
