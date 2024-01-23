import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// component
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
import CardProductShopping from '@molecules/card/card-product-shopping/CardProductShopping';
import EmptyList from '@molecules/empty-message/empty-list/EmptyList';
// static data
import { arrayFakeMyShopping } from '../../services/utils/static.data';
// css
import '../profile/Profile.scss';

// OJO FALTA INCORPORAR LA DATA DE LA DB AQUI
const MyShopping = () => {
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
                Mis compras
              </Typography>
            </Stack>

            <List sx={{ width: '100%', overflowY: 'scroll' }}>
              {/* OJO FALTA sustituid condicional para cuando no tenga data */}
              {/* daata debe venir del store o db del user */}
              {arrayFakeMyShopping.length > 0 ? (
                arrayFakeMyShopping.map((e) => (
                  <ListItem key={`product-shopping-item${e.id}`}>
                    <CardProductShopping
                      idProduct={e.id}
                      imgProduct={e.img}
                      titleProduct={e.title}
                      purchased={e.purchased}
                      delivered={e.delivered}
                      direction={e.direction}
                      status={e.status}
                    />
                  </ListItem>
                ))
              ) : (
                <EmptyList
                  title={'Historial vacio'}
                  subtitle={'Parece que no haz comprado nada aun'}
                  btnText={'Ir a comprar'}
                />
              )}
            </List>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyShopping;
