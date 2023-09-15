import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import CardItem from '@molecules/card/cardItem/CardItem';
import { listaProductosPrueba } from '@services/utils/static.data';

// cosas para el grid
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// css
import '../productsList/ProductsList.scss';

const ProductsList = () => {
  // de esta forma se puede obtener el nombre de la lista de productos
  const { id } = useParams();

  // OJO DEBE LLAMARSE ASI LOS STATES, DAN PROBLEMAS
  const [anchorEl, setAnchorEl] = useState(null); // CAMBIAR NNOMBRE SI ES POSIBLE

  // state para el filtro de ordenar por
  const [filterState, setFilterState] = useState(null); // hay que crear una funcion para que filtre los elementos y se establezca con este state

  // para menu de modelos
  const open = Boolean(anchorEl); // CAMBIAR NNOMBRE SI ES POSIBLE

  const handleClick = (event) => {
    // CAMBIAR NNOMBRE SI ES POSIBLE
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // aqui debe ir las funciones para cuando se haga click en las opciones
    setAnchorEl(null); // CAMBIAR NNOMBRE SI ES POSIBLE
  };

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
                  color: 'red'
                },
                display: 'flex'
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Ordenar por: {filterState}
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
              <MenuItem
                onClick={() => {
                  handleClose();
                  setFilterState('Menor precio');
                }}
              >
                Menor precio
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setFilterState('Mayor precio');
                }}
              >
                Mayor precio
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setFilterState('Calificacion');
                }}
              >
                Calificacion
              </MenuItem>
            </Menu>
          </div>
          <div className="menu">Menu</div>
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
