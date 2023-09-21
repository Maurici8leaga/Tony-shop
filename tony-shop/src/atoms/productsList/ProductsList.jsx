import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import CardItem from '@molecules/card/cardItem/CardItem';
import { listaProductosPrueba, categoryMenuData, rangePrice, rangeCalification } from '@services/utils/static.data';

// cosas para el grid
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

import Typography from '@mui/material/Typography';

// cosas para el menu list
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';

// import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Divider from '@mui/joy/Divider';

import Box from '@mui/joy/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Rating from '@mui/material/Rating';
import CloseIcon from '@mui/icons-material/Close';

// cosas para el pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// cosas para los drawer
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// css
import '../productsList/ProductsList.scss';

const ProductsList = () => {
  // de esta forma se puede obtener el nombre de la lista de productos
  const { id } = useParams();

  // state para el filtro de ordenar por
  const [filterState, setFilterState] = useState(null); // hay que crear una funcion para que filtre los elementos y se establezca con este state

  // State para el rango de precio
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // state para filtros seleccionados
  const [filterSelected, setFilterSelected] = useState(false);

  // state para las pages
  const [page, setPage] = useState(1);

  // state para los drawer
  const [openDrawerFilter, setOpenDrawerFilter] = useState(false);
  // const [openDrawerSortBy, setOpenDrawerSortBy] = useState(false);

  // handle para cambiar las paginas
  const handleChange = (event, value) => {
    setPage(value);
  };

  // submit form
  const filterPrice = (event) => {
    event.preventDefault();
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div className="bg-container">
      <Container fixed>
        <div className="container">
          <div className="header">
            <Dropdown>
              <MenuButton
                variant="plain"
                sx={{
                  my: 2,
                  color: 'inherit',
                  '&:hover': {
                    color: 'red',
                    bgcolor: 'transparent'
                  },
                  display: 'flex'
                }}
                endDecorator={<KeyboardArrowDownIcon />}
              >
                Ordenar por: {filterState}
              </MenuButton>
              <Menu variant="plain">
                <MenuItem onClick={() => setFilterState('Menor precio')}>Menor precio</MenuItem>
                <MenuItem onClick={() => setFilterState('Mayor precio')}>Mayor precio</MenuItem>
                <MenuItem onClick={() => setFilterState('Calificacion')}>Calificacion</MenuItem>
              </Menu>
            </Dropdown>
          </div>
          <div className="menu">
            <Box sx={{ marginBottom: '10px' }}>
              <Typography variant="h5">Producto {id}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginRight: 1 }}>
                  (100){' '}
                </Typography>

                <Typography variant="p" sx={{ fontSize: '14px', fontWeight: 400 }}>
                  {' '}
                  Resultados
                </Typography>
                {/* el numero debe venir del back con la cantidad exacta de lo encontrado */}
              </Box>
            </Box>

            <Divider />

            <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
              {filterSelected ? (
                <Box sx={{ marginTop: '15px', marginBottom: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography level="body-xs" textTransform="uppercase" fontWeight="md" variant="subtitle2">
                      Filtros seleccionados
                    </Typography>
                    <IconButton
                      aria-label="search-range-price"
                      size="small"
                      color="inherit"
                      type="submit"
                      sx={{ justifyContent: 'center', alignItems: 'center' }}
                      onClick={() => setFilterSelected(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 1,
                      flexWrap: 'wrap'
                    }}
                  >
                    {/* se debe crear funcionalidad para poder agregar cada button con su nombre en este espacio */}
                    <Button
                      variant="outlined"
                      size="small"
                      color="inherit"
                      endIcon={<CloseIcon />}
                      onClick={() => setFilterSelected(false)}
                      sx={{ textTransform: 'inherit' }}
                    >
                      {/* aqui debe ir el nombre de cada filtro */}
                      Hasta 5$
                    </Button>
                  </Box>
                </Box>
              ) : (
                ''
              )}

              <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
                <Typography level="body-xs" textTransform="uppercase" fontWeight="md" mb={0.5} variant="subtitle2">
                  Categorias
                </Typography>
                <List>
                  {categoryMenuData.map((item) => (
                    <ListItemButton
                      key={item.id}
                      color="string"
                      component="a"
                      href="#"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: 'inherit',
                        background: 'transparent',
                        '&:hover': {
                          color: 'red'
                        }
                      }}
                    >
                      {item.data}
                      <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
                        {' '}
                        ({item.num})
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
              </Box>

              <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
                <Typography level="body-xs" textTransform="uppercase" fontWeight="md" mb={0.5} variant="subtitle2">
                  Precio
                </Typography>

                <List>
                  {rangePrice.map((item) => (
                    <ListItemButton
                      key={item.id}
                      color="string"
                      component="a"
                      href="#"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: 'inherit',
                        background: 'transparent',
                        '&:hover': {
                          color: 'red'
                        }
                      }}
                      onClick={() => setFilterSelected(true)}
                    >
                      {item.range}{' '}
                      <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
                        {' '}
                        ({item.mount})
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>

                <Box
                  component="form"
                  autoComplete="off"
                  gap={2}
                  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                  onSubmit={filterPrice}
                >
                  <TextField
                    id="input-price-range-min"
                    label="Desde"
                    // variant="outlined"
                    value={minPrice}
                    type="num"
                    placeholder="Desde"
                    onChange={(event) => setMinPrice(event.target.value)}
                    sx={{ width: '50%', height: '50px' }}
                    size="small"
                  />

                  <TextField
                    id="input-price-range-max"
                    label="Hasta"
                    // variant="outlined"
                    value={maxPrice}
                    type="num"
                    placeholder="Desde"
                    onChange={(event) => setMaxPrice(event.target.value)}
                    sx={{ width: '50%', height: '50px' }}
                    size="small"
                  />

                  <IconButton
                    aria-label="search-range-price"
                    size="small"
                    color="primary"
                    type="submit"
                    sx={{ paddingBottom: 1.5 }}
                  >
                    <FilterAltIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
                <Typography level="body-xs" textTransform="uppercase" fontWeight="md" mb={0.5} variant="subtitle2">
                  Descuentos
                </Typography>

                <List>
                  <ListItemButton
                    color="string"
                    component="a"
                    href="#"
                    sx={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'inherit',
                      background: 'transparent',
                      '&:hover': {
                        color: 'red'
                      }
                    }}
                  >
                    Desde 5% OFF{' '}
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
                      {' '}
                      (1)
                    </Typography>
                  </ListItemButton>
                </List>
              </Box>

              <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
                <Typography level="body-xs" textTransform="uppercase" fontWeight="md" mb={0.5} variant="subtitle2">
                  Calificacion
                </Typography>

                <List>
                  {rangeCalification.map((item) => (
                    <ListItemButton key={item.id} color="string" component="a" href="#">
                      <Rating name="rating-product" value={item.value} readOnly />
                      <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
                        {' '}
                        ({item.mount})
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Box>
          </div>
          <div className="mini-header">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 1
              }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant="h5" sx={{ justifyContent: 'start', alignItems: 'center', mb: 1 }}>
                  Titulo {id}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginRight: 1 }}>
                    (100){' '}
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: '14px', fontWeight: 400 }}>
                    {' '}
                    Resultados
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: '100%',
                  height: '45px',
                  backgroundColor: '#fff'
                }}
              >
                <Button variant="text" sx={{ width: '100%' }} onClick={() => setOpenDrawerFilter(true)}>
                  Filtrar
                </Button>
                <Divider orientation="vertical" />
                <Button variant="text" sx={{ width: '100%' }}>
                  Ordenar
                </Button>
              </Box>
            </Box>

            <Drawer open={openDrawerFilter} anchor="left" onClose={() => setOpenDrawerFilter(false)}>
              <Box sx={{ width: { xs: '350px', lg: '400px' } }}>
                <List>
                  <ListItem sx={{ py: 1, display: 'flex', flexDirection: 'row-reverse' }}>
                    <IconButton onClick={() => setOpenDrawerFilter(false)}>
                      <CloseIcon />
                    </IconButton>
                  </ListItem>

                  <ListItem>Filtrar por:</ListItem>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Categoria</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ListItemButton
                        color="string"
                        component="a"
                        href="#"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: 'inherit',
                          background: 'transparent',
                          '&:hover': {
                            color: 'red'
                          }
                        }}
                      >
                        Lubricante (12)
                      </ListItemButton>
                    </AccordionDetails>
                  </Accordion>
                </List>
              </Box>
            </Drawer>
          </div>
          <div className="content">
            {listaProductosPrueba.map((item) => (
              <div key={`product_item_${item.id}`}>
                <CardItem
                  imgProduct={item.imgProduct}
                  nameProduct={item.nameProduct}
                  priceProduct={item.priceProduct}
                  descriptionProduct={item.descriptionProduct}
                  customWidth={'270px'}
                  customHeight={'320px'}
                />
              </div>
            ))}
          </div>
          <div className="footer">
            <Stack
              spacing={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}
            >
              {/* hay que crear una funcionalidad para colocar cuantos productos va a desplegar por pagina y asi saber cuantas paginass
              tendra y asi poder colocar el count real */}
              <Pagination count={10} page={page} onChange={handleChange} color="primary" />
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsList;
