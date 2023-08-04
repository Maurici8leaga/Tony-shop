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
import { Padding } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import NavbarList from '@molecules/navbar/NavbarList';

const navLinks = [
  { title: 'Productos', path: '#Products' },
  { title: 'Registrate', path: '#Signup' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // state para el menu de categorias
  // OJO DEBE LLAMARSE ASI LOS STATES, DAN PROBLEMAS
  const [anchorEl, setAnchorEl] = React.useState(null);
  // state para shop car y user profile
  const [auth, setAuth] = React.useState(true);

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

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#11468f', display: 'flex' }}>
      <Container maxWidth="xl">
        <Toolbar disableutters>
          {/* Hamburger menu */}
          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            {/* flexgorow permite empujar lo que no este dentro de este box hacia la derecha */}
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
              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'inherit',
                    display: 'flex'
                  }}
                  underline={'none'}
                >
                  Modelos
                </Link>
              </MenuItem>

              <MenuItem sx={{ my: 1 }}>
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Accesorios
                </Link>
              </MenuItem>

              <MenuItem sx={{ my: 1 }}>
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Aceites
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Frenos
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Lubricantes
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Neumaticos
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Refrigerante
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
                divider={true}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Ver todo
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Registrate
                </Link>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 1
                }}
              >
                <Link onClick={handleCloseNavMenu} sx={{ color: 'inherit', display: 'flex' }} underline={'none'}>
                  Contacto
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" className="logo">
              <Box component="img" sx={{ height: 100, width: 200, display: 'flex' }} alt="Logo" src={logoStore} />
            </Link>
          </Box>

          {/*  barra de busqueda  */}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Buscar producto ..." inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Box>

          {/* AQUI VAN LA LISTA DE ELEMENTOS DEL MENU  */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, flexGrow: 1 }}>
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
                  color: '#f00'
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
              <MenuItem onClick={handleClose}>Bera</MenuItem>
              <MenuItem onClick={handleClose}>Honda</MenuItem>
              <MenuItem onClick={handleClose}>Kawasaki</MenuItem>
              <MenuItem onClick={handleClose}>Suzuki</MenuItem>
              <MenuItem onClick={handleClose}>Yamaha</MenuItem>
            </Menu>

            {navLinks.map((link) => (
              <Button
                key={link.title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'inherit',
                  '&:hover': {
                    color: '#f00'
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
                display: { xs: 'flex', sm: 'flex', md: 'flex' },
                ml: 2
              }}
            >
              <IconButton size="medium" aria-label="shopping cart" color="inherit">
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
              >
                <AccountCircle />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
