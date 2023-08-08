import * as React from 'react';

// cosas para el list
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

// cosass para el drawer
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import SearchBar from '@molecules/searchBar/SearchBar';

const NavbarList = (prop) => {
  const { openDrawer, setOpenDrawer } = prop;

  const drawerLinks = [
    { title: 'Modelos', path: '#BykeModels' },
    { title: 'Accesorios', path: '#Accessories' },
    { title: 'Aceites', path: '#Oils' },
    { title: 'Frenos', path: '#Breaks' },
    { title: 'Lubricantes', path: '#Lubricants' },
    { title: 'Neumaticos', path: '#Tires' },
    { title: 'Refrigerante', path: '#Refrigerant' },
    { title: 'Ver todo', path: '#AllProducts' },
    { title: 'Registrate', path: '#SignUp' },
    { title: 'Contacto', path: '#Contact' }
  ];

  return (
    <>
      <Drawer open={openDrawer} anchor="left" onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: '250px' }}>
          <nav>
            <List>
              <ListItem sx={{ py: 3 }}>
                <Typography variant="h6" sx={{ color: '#041562' }}>
                  Tony Moto shop Menu
                </Typography>
              </ListItem>

              <Divider sx={{ bgcolor: '#11468f' }} />

              <ListItem sx={{}}>
                <SearchBar placeHolderText={'Buscar producto ..'} />
              </ListItem>

              <Divider />

              {drawerLinks.map((item) => (
                <div key={item.title}>
                  <ListItem>
                    <ListItemButton component="a" sx={{ color: '#041562' }}>
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
