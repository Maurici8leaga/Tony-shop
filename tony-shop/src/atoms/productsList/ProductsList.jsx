import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardItem from '@molecules/card/cardItem/CardItem';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import MenuFilters from '@molecules/menu/MenuFilters';
import MiniHeader from '@molecules/header/miniHeader/MiniHeader';
import { listaProductosPrueba } from '@services/utils/static.data';
import '../productsList/ProductsList.scss';

const ProductsList = () => {
  const { id } = useParams();

  const [checked, setChecked] = useState(null);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [filterSelected, setFilterSelected] = useState(false);

  const [page, setPage] = useState(1);

  const [openDrawerFilter, setOpenDrawerFilter] = useState(false);
  const [openDrawerSortBy, setOpenDrawerSortBy] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filterPrice = (event) => {
    event.preventDefault();
    setMinPrice('');
    setMaxPrice('');
  };

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
          <div className="pagination-grid">
            <Stack
              spacing={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}
            >
              <Pagination count={10} page={page} onChange={handleChange} color="primary" />
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsList;
