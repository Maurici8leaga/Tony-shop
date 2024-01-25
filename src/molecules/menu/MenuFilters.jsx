import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
// component material ui
import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import List from '@mui/joy/List';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ListItemButton from '@mui/joy/ListItemButton';
import Rating from '@mui/material/Rating';
// component jsx
import ProductStockLink from '@molecules/link/ProductStockLink';
// static data
import { categoryMenuData, rangePrice, rangeCalification } from '@services/utils/static.data';

const MenuFilters = (props) => {
  const {
    titleSection,
    amountResults,
    filterSelected,
    setFilterSelected,
    filterPrice,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice
  } = props;

  return (
    <>
      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="h5">Producto {titleSection}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginRight: 1 }}>
            ({amountResults}){' '}
          </Typography>

          <Typography variant="p" sx={{ fontSize: '14px', fontWeight: 400, color: 'var(--darkBlue)' }}>
            {' '}
            Resultados
          </Typography>
          {/* el numero debe venir del back con la cantidad exacta de lo encontrado */}
        </Box>
      </Box>

      <Divider />

      <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
        {/* space para los filtros seleccionados */}
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
                endIcon={<CloseIcon onClick={() => setFilterSelected(false)} />}
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
            {/* falta incorporar loading a este condicional */}
            {categoryMenuData.length > 0
              ? categoryMenuData.map((item) => (
                  <ProductStockLink key={item.id} data={item.data} amount={item.num} href={item.href} click={false} />
                ))
              : Array.from(new Array(5)).map((x, index) => (
                  // OJO duda sobre la x sin implementar, estara bien dejar asi ???
                  <div key={index}>
                    <Skeleton />
                  </div>
                ))}
          </List>
        </Box>

        <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
          <Typography level="body-xs" textTransform="uppercase" fontWeight="md" mb={0.5} variant="subtitle2">
            Precios
          </Typography>

          <List>
            {rangePrice.map((item) => (
              <ProductStockLink
                key={item.id}
                data={item.range}
                amount={item.mount}
                click={true}
                functionOnClick={() => setFilterSelected(true)}
              />
            ))}
          </List>
          {/* custom filter by price */}
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
            <ProductStockLink
              data={'Desde 5% OFF'}
              amount={1}
              click={true}
              functionOnClick={() => setFilterSelected(true)}
            />
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
    </>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observer
MenuFilters.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ellos
  titleSection: PropTypes.string.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  amountResults: PropTypes.number.isRequired,
  filterSelected: PropTypes.bool,
  setFilterSelected: PropTypes.func,
  filterPrice: PropTypes.func,
  minPrice: PropTypes.string,
  // si el prop no lleva isRequired, significa que su presencia en el component puede ser opcional
  setMinPrice: PropTypes.func,
  maxPrice: PropTypes.string,
  setMaxPrice: PropTypes.func
};

export default MenuFilters;
