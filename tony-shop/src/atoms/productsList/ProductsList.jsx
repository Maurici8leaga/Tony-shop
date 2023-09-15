import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import CardItem from '@molecules/card/cardItem/CardItem';
import { listaProductosPrueba } from '@services/utils/static.data';

// cosas para el grid
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

import Typography from '@mui/material/Typography';

// cosas para el menu list
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Divider from '@mui/joy/Divider';

// css
import Box from '@mui/joy/Box';
import '../productsList/ProductsList.scss';

const ProductsList = () => {
  // de esta forma se puede obtener el nombre de la lista de productos
  const { id } = useParams();

  // state para el filtro de ordenar por
  const [filterState, setFilterState] = useState(null); // hay que crear una funcion para que filtre los elementos y se establezca con este state

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'grey',
        marginTop: '100px',
        paddingTop: '50px',
        overflowY: 'scroll'
      }}
    >
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
              <Typography variant="body1">(100) Resultados </Typography>
            </Box>

            <Divider />

            <Box sx={{ marginTop: '10px', marginBottom: '10px' }}>
              <Typography id="decorated-list-demo" level="body-xs" textTransform="uppercase" fontWeight="md" mb={0.5}>
                Categorias
              </Typography>
              <List aria-labelledby="decorated-list-demo">
                <ListItemButton
                  component="a"
                  href="#"
                  sx={{
                    color: 'inherit',
                    background: 'transparent',
                    '&:hover': {
                      color: 'red',
                      bgcolor: 'transparent'
                    }
                  }}
                >
                  Lubricantes (12)
                </ListItemButton>
                <ListItem>Repuesto (20)</ListItem>
                <ListItem>Accesorio (30)</ListItem>
                <ListItem>Otros (9)</ListItem>
              </List>
            </Box>
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
          <div className="footer">Footer</div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsList;
