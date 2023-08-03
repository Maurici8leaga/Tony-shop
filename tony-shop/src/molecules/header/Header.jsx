import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Search, SearchIconWrapper, StyledInputBase } from './header.MUI.styles';
import './Header.scss';
import logoStore from '@assets/img/tonys-logo2.png';

const pages = ['Accesorios', 'Productos', 'Registrate', 'Contacto'];

const menuMobile = [
  'Accesorios',
  'Aceites',
  'Frenos',
  'Lubricantes',
  'Neumaticos',
  'Refrigerante',
  'Ver todo',
  'Registrate',
  'Contacto'
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // state para el menu de categorias
  // OJO DEBE LLAMARSE ASI LOS STATES, DAN PROBLEMAS
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // aqui debe ir las funciones para cuando se haga click en las opciones
    setAnchorEl(null);
  };

  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#11468f' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 100, width: 200, display: { xs: 'none', md: 'flex' }, mr: 2 }}
              alt="Logo"
              src={logoStore}
            />
          </Link>

          {/* Hamburger menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {/* <MenuItem>
                <Button
                  id="category-btn"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'inherit', display: 'flex' }}
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
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  <MenuItem onClick={handleClose}>Bera</MenuItem>
                  <MenuItem onClick={handleClose}>Honda</MenuItem>
                  <MenuItem onClick={handleClose}>Kawasaki</MenuItem>
                  <MenuItem onClick={handleClose}>Suzuki</MenuItem>
                  <MenuItem onClick={handleClose}>Yamaha</MenuItem>
                </Menu>
              </MenuItem> */}

              <Button
                id="category-btn"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'inherit', display: 'flex' }}
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
                <MenuItem onClick={handleClose}>Bera</MenuItem>
                <MenuItem onClick={handleClose}>Honda</MenuItem>
                <MenuItem onClick={handleClose}>Kawasaki</MenuItem>
                <MenuItem onClick={handleClose}>Suzuki</MenuItem>
                <MenuItem onClick={handleClose}>Yamaha</MenuItem>
              </Menu>

              {menuMobile.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex', ml: 2 }}>
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>

          {/* AQWUI VA EL LOGO CUANDO ES DE TAMANO MAS PEQUENO  */}
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 100, width: 200, display: { xs: 'flex', md: 'none' }, mr: 5 }}
              alt="Logo"
              src={logoStore}
            />
          </Link>

          {/*  barra de busqueda  */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          {/* AQUI VAN LA LISTA DE ELEMENTOS DEL MENU  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            <Button
              id="category-btn"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ my: 2, color: 'inherit', display: 'flex' }}
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
              <MenuItem onClick={handleClose}>Bera</MenuItem>
              <MenuItem onClick={handleClose}>Honda</MenuItem>
              <MenuItem onClick={handleClose}>Kawasaki</MenuItem>
              <MenuItem onClick={handleClose}>Suzuki</MenuItem>
              <MenuItem onClick={handleClose}>Yamaha</MenuItem>
            </Menu>

            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'inherit', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            <IconButton size="large" aria-label="shopping cart" color="inherit">
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon color="white" />
              </Badge>
            </IconButton>
          </Box>

          {/* Profile menu when user is logged */}
          {/* {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
