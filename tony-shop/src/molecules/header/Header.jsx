import * as React from 'react';
import NavbarList from '@molecules/navbar/NavbarList';
import SearchBar from '@molecules/searchBar/SearchBar';
import ShoppingDrawer from '@molecules/shoppingDrawer/ShoppingDrawer';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { navLinks, mainColors, secondaryColor, bykeModels } from '@services/utils/static.data';
import logoStore from '@assets/img/tonys-logo2.png';
import './Header.scss';

const Header = () => {
  const { lightBlue, strongRed } = mainColors;
  const { white025, white015 } = secondaryColor;

  // shop car and user profile
  const [auth, setAuth] = React.useState(true);

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [openShoppingDrawer, setOpenShoppingDrawer] = React.useState(false);

  // handler for user authentication
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: `${lightBlue}`, display: 'flex' }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}
        >
          <NavbarList openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

          <ShoppingDrawer openShoppingDrawer={openShoppingDrawer} setOpenShoppingDrawer={setOpenShoppingDrawer} />

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
            <Link href="/" className="logo">
              <Box component="img" sx={{ height: 100, width: 200, display: 'flex' }} alt="Logo" src={logoStore} />
            </Link>

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
            <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
              {navLinks.map((link) => (
                <Button
                  component="a"
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
                  href="/account/profile"
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
