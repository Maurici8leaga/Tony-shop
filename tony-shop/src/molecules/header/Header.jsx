import * as React from 'react';
// components
import NavbarList from '@molecules/navbar/NavbarList';
import SearchBar from '@molecules/searchBar/SearchBar';
import ShoppingDrawer from '@molecules/shoppingDrawer/ShoppingDrawer';
// components MUI
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// static files
import { navLinks, mainColors, secondaryColor, bykeModels } from '@services/utils/static.data';
// assets
import logoStore from '@assets/img/tonys-logo2.png';
// css
import './Header.scss';

const Header = () => {
  const { lightBlue, strongRed } = mainColors;
  const { white025, white015 } = secondaryColor;

  // state para el menu de categorias
  // OJO DEBE LLAMARSE ASI LOS STATES, DAN PROBLEMAS
  const [anchorEl, setAnchorEl] = React.useState(null);

  // state para shop car y user profile
  const [auth, setAuth] = React.useState(true);

  // state for drawer
  const [openDrawer, setOpenDrawer] = React.useState(false);

  // state for shopping car drawer
  const [openShoppingDrawer, setOpenShoppingDrawer] = React.useState(false);

  // para menu de modelos
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // aqui debe ir las funciones para cuando se haga click en las opciones
    setAnchorEl(null);
  };

  // para autenticacion del usuario, despliegue de menu y shoping car
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: `${lightBlue}`, display: 'flex' }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}
        >
          {/* drawer */}
          <NavbarList openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

          {/* shopping drawer */}
          <ShoppingDrawer openShoppingDrawer={openShoppingDrawer} setOpenShoppingDrawer={setOpenShoppingDrawer} />

          {/* Hamburger menu */}
          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* logo */}
            <Link href="/" className="logo">
              <Box component="img" sx={{ height: 100, width: 200, display: 'flex' }} alt="Logo" src={logoStore} />
            </Link>

            {/*  barra de busqueda  */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, height: 43 }}>
              <SearchBar placeHolderText={'Buscar producto...'} colorbg1={`${white015}`} colorbg2={`${white025}`} />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: { sm: 'auto', lg: '100%' }
            }}
          >
            {/* AQUI VAN LA LISTA DE ELEMENTOS DEL MENU  */}
            <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
              <Button
                id="category-btn"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                  my: 2,
                  color: 'inherit',
                  '&:hover': {
                    color: `${strongRed}`
                  },
                  display: 'flex'
                }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Modelos
              </Button>

              <Menu
                id="category-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'category-btn'
                }}
              >
                {bykeModels.map((item) => (
                  <MenuItem key={`bike_${item.title}`} onClick={handleClose}>
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>

              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  sx={{
                    my: 2,
                    color: 'inherit',
                    '&:hover': {
                      color: `${strongRed}`
                    },
                    display: 'block'
                  }}
                  href={link.path}
                >
                  {link.title}
                </Button>
              ))}
            </Box>

            {/* Profile menu when user is logged */}
            {auth && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 2
                }}
              >
                <IconButton
                  size="medium"
                  aria-label="shopping cart"
                  color="inherit"
                  onClick={() => setOpenShoppingDrawer(true)}
                >
                  <Badge badgeContent={1} color="error">
                    <ShoppingCartIcon color="white" />
                  </Badge>
                </IconButton>

                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  component="a"
                  href="#Account"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
