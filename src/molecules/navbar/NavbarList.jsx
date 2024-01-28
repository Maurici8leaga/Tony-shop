/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
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
import { drawerLinks, secondaryColor } from '@services/utils/static.data';

const NavbarList = ({ openDrawer, setOpenDrawer }) => {
  const { grey400, grey700 } = secondaryColor;

  return (
    <>
      <Drawer open={openDrawer} anchor="left" onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: { xs: '350px', lg: '400px' } }}>
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
                    color: 'var(--darkBlue)',
                    bgcolor: 'none',
                    '&:hover': {
                      color: 'var(--white)',
                      bgcolor: 'var(--blue)'
                    },
                    borderColor: 'var(--darkBlue)'
                  }}
                >
                  Buscar
                </Button>
              </ListItem>

              {drawerLinks.map((item) => (
                <div key={item.title}>
                  <ListItem>
                    <IconButton>{item.icon}</IconButton>
                    <ListItemButton component="a" href={`${item.path}`} sx={{ color: 'var(--darkBlue)' }}>
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

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observe
NavbarList.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ello
  openDrawer: PropTypes.bool.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  setOpenDrawer: PropTypes.func
};

export default NavbarList;
