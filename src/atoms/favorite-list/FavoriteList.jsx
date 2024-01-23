import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
// component
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
import CardProductFavorite from '@molecules/card/card-product-favorite/CardProductFavorite';
import EmptyList from '@molecules/empty-message/empty-list/EmptyList';
// static data
import { arrayFakeShoppingCar } from '../../services/utils/static.data';
// css
import '../profile/Profile.scss';

// OJO FALTA AGREGAR LOGICA PARA AGREGAR LOS ELEMENTOS AL CARRO Y ELEMINAR ELEMENTOS

const FavoriteList = () => {
  // state for qty product selected
  const [qtySelected, SetqtySelected] = useState(1);

  const [checked, setChecked] = useState([]);

  const addProduct = () => {
    SetqtySelected(qtySelected + 1);
    // aqui hay que agregar logica para que tampoco supere el limite que hay en el stock de la db
  };

  const minusProduct = () => {
    if (qtySelected > 1) {
      SetqtySelected(qtySelected - 1);
    } else {
      SetqtySelected(1);
    }
  };

  // se crea esta funcion para poder controlar los product seleccionados y asi poder enviarlos al carrito
  const handleChange = (event) => {
    let arrProduct = [...checked];
    if (event.target.checked) {
      arrProduct = [...checked, event.target.value];
    } else {
      arrProduct.splice(checked.indexOf(event.target.value), 1);
      // el splice va eliminar el element que acaba de ser unchecked, con indexOf optiene el index del elemento y lo saca del arrproduct
    }
    setChecked(arrProduct);
  };

  return (
    <div className="container-profile">
      <Container fixed>
        <div className="container-grid-profile">
          <div className="menu-profile">
            {/* a este component a futuro se le debe pasar data para tener acceso al user */}
            <MenuProfile />
          </div>
          <div className="menu-profile-adaptive">
            {/* a este component a futuro se le debe pasar data para tener acceso al user */}
            <MenuProfileAdaptive />
          </div>
          <div className="profile-content">
            <Stack direction="row" justifyContent="start" alignItems="center" sx={{ width: '100%', marginY: '1rem' }}>
              <Typography variant="h5" sx={{ marginY: '1rem' }}>
                {' '}
                Mis favoritos
              </Typography>
            </Stack>

            <List sx={{ width: '80%', height: '100%', overflowY: 'scroll' }}>
              {/* OJO FALTA sustituid condicional para cuando no tenga data */}
              {/* daata debe venir del store o db del user */}
              {arrayFakeShoppingCar.length > 0 ? (
                arrayFakeShoppingCar.map((e) => (
                  <ListItem key={`product-favorite-${e.id}`}>
                    <CardProductFavorite
                      img={e.img}
                      title={e.title}
                      price={e.price}
                      addProduct={addProduct}
                      minusProduct={minusProduct}
                      qtySelected={qtySelected}
                      handleChange={handleChange}
                    />
                  </ListItem>
                ))
              ) : (
                <EmptyList
                  title={'Sin favoritos'}
                  subtitle={'Por ahora no tienes ningun producto agregado en tu lista'}
                  btnText={'Buscar producto'}
                />
              )}
            </List>

            {arrayFakeShoppingCar.length > 0 ? (
              <Stack direction="row" justifyContent="end" sx={{ width: '100%', marginY: '1rem' }}>
                {checked.length > 0 ? (
                  <Button variant="contained">Agregar al carro </Button>
                ) : (
                  <Button variant="contained" disabled>
                    Agregar al carro{' '}
                  </Button>
                )}
              </Stack>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FavoriteList;
