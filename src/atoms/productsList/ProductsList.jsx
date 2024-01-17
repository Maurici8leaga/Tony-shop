import { useState } from 'react';
import { useParams } from 'react-router-dom';
// cosas para el grid
import Container from '@mui/material/Container';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardItem from '@molecules/card/cardItem/CardItem';
import Box from '@mui/joy/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
// component jsx
import MenuFilters from '@molecules/menu/MenuFilters';
import MiniHeader from '@molecules/header/miniHeader/MiniHeader';
// static data
import { listaProductosPrueba } from '@services/utils/static.data';
// css
import '../productsList/ProductsList.scss';

const ProductsList = () => {
  // de esta forma se puede obtener el nombre de la lista de productos
  const { id } = useParams();

  // state para el filtro de ordenar por
  const [checked, setChecked] = useState(null); // hay que crear una funcion para que filtre los elementos y se establezca con este state

  // State para el rango de precio
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // state para filtros seleccionados
  const [filterSelected, setFilterSelected] = useState(false);

  // state para las pages
  const [page, setPage] = useState(1);

  // state para los drawer
  const [openDrawerFilter, setOpenDrawerFilter] = useState(false);
  const [openDrawerSortBy, setOpenDrawerSortBy] = useState(false);

  // handle para cambiar las paginas

  const handleChange = (event, value) => {
    // OJO DEJAR "event" PORQUE SI NO DA ERROR
    setPage(value);
  };

  // submit form
  const filterPrice = (event) => {
    event.preventDefault();
    setMinPrice('');
    setMaxPrice('');
  };

  // handle for set checkbox
  const handleSetSortBy = (event) => {
    setChecked(event.target.value);
  };

  return (
    <div className="bg-container-grid">
      <Container fixed>
        <div className="container-grid">
          <div className="bar-sortBy">
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
                Ordenar por: {checked}
              </MenuButton>
              <Menu variant="plain">
                <MenuItem component={'button'} onClick={handleSetSortBy} value="Menor precio">
                  Menor precio
                </MenuItem>
                <MenuItem component={'button'} onClick={handleSetSortBy} value="Mayor precio">
                  Mayor precio
                </MenuItem>
                <MenuItem component={'button'} onClick={handleSetSortBy} value="Calificacion">
                  Calificacion
                </MenuItem>
              </Menu>
            </Dropdown>
          </div>
          <div className="menu-filters">
            <MenuFilters
              titleSection={id}
              amountResults={100}
              filterSelected={filterSelected}
              setFilterSelected={setFilterSelected}
              filterPrice={filterPrice}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          <div className="bar-filters">
            <MiniHeader
              titleSection={id}
              amountResults={100}
              openDrawerFilter={openDrawerFilter}
              setOpenDrawerFilter={setOpenDrawerFilter}
              filterSelected={filterSelected}
              setFilterSelected={setFilterSelected}
              openDrawerSortBy={openDrawerSortBy}
              setOpenDrawerSortBy={setOpenDrawerSortBy}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
          <div className="content-grid">
            {/* falta incorporar loading a este condicional */}
            {listaProductosPrueba.length > 0
              ? listaProductosPrueba.map((item) => (
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
                ))
              : Array.from(new Array(9)).map((x, index) => (
                  // OJO duda sobre la x sin implementar, estara bien dejar asi ???
                  <div key={index}>
                    <Box width={270} height={320}>
                      <Skeleton variant="rectangular" width="100%" height={157} />
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton />
                      </Box>
                    </Box>
                  </div>
                ))}
          </div>

          <div className="pagination-grid">
            <Stack
              spacing={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}
            >
              {/* hay que crear una funcionalidad para colocar cuantos productos va a desplegar por pagina y asi saber cuantas paginass
              tendra y asi poder colocar el count real */}
              <Pagination count={10} page={page} onChange={handleChange} color="primary" />
              {/* <Pagination count={10} siblingCount={0} page={page} onChange={handleChange} color="primary" /> */}
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsList;
