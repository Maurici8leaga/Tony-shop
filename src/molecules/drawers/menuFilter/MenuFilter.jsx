import React from 'react';
// component mui
import Drawer from '@mui/material/Drawer';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
// component jsx
import ProductStockLink from '@molecules/link/ProductStockLink';
// static data
import { categoryMenuData, rangePrice, rangeCalification } from '@services/utils/static.data';

const MenuFilter = (prop) => {
  const { openDrawer, closeDrawer, filterSelected, setFilterSelected } = prop;

  const selectingFilter = () => {
    setFilterSelected(true);
  };

  return (
    <Drawer open={openDrawer} anchor="left" onClose={() => closeDrawer(false)}>
      <Box sx={{ width: { xs: '350px', lg: '400px' } }}>
        <List>
          <ListItem sx={{ py: 1, display: 'flex', flexDirection: 'row-reverse' }}>
            <IconButton onClick={() => closeDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </ListItem>

          <ListItem>
            <Typography variant="h6" sx={{ color: 'var(--darkBlue)' }}>
              Filtrar por:
            </Typography>
          </ListItem>

          {/* space para los filtros seleccionados */}
          {filterSelected ? (
            <Accordion defaultExpanded={true}>
              <AccordionSummary expandIcon={<CloseIcon onClick={() => setFilterSelected(false)} />}>
                <Typography sx={{ color: 'var(--darkBlue)' }}>Filtros seleccionados</Typography>
              </AccordionSummary>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: 1,
                  flexWrap: 'wrap',
                  mx: 2,
                  my: 2
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
            </Accordion>
          ) : (
            ''
          )}

          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ color: 'var(--darkBlue)' }}>Categorias</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {categoryMenuData.map((item) => (
                <ProductStockLink key={item.id} data={item.data} amount={item.num} href={item.href} click={false} />
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ color: 'var(--darkBlue)' }}>Precios</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {rangePrice.map((item) => (
                <ProductStockLink
                  key={item.id}
                  data={item.range}
                  amount={item.mount}
                  click={true}
                  functionOnClick={selectingFilter}
                />
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ color: 'var(--darkBlue)' }}>Descuentos</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ProductStockLink data={'Desde 5% OFF'} amount={1} click={true} functionOnClick={selectingFilter} />
              {/* aqui el click es true pero la funcion DEBE CAMBIARRSE CUANDO SE CREE LA FUNCIONALIDADES DE LOS FILTROS */}
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ color: 'var(--darkBlue)' }}>Calificacion</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {rangeCalification.map((item) => (
                <ListItemButton key={item.id} color="string" component="a" href="#">
                  <Rating name="rating-product" value={item.value} readOnly />
                  <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
                    {' '}
                    ({item.mount})
                  </Typography>
                </ListItemButton>
              ))}
            </AccordionDetails>
          </Accordion>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuFilter;
