import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
// component
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
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
              <ListItem>
                <Card color="neutral" orientation="horizontal" variant="soft" sx={{ width: '100%' }}>
                  <AspectRatio ratio="1" sx={{ width: 90, alignSelf: 'center' }}>
                    <img
                      srcSet="https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275"
                      loading="lazy"
                      alt="img-product" // colorcar un alt org
                    />
                  </AspectRatio>

                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle2">Titulo producto</Typography>

                      <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>
                        Nº 123456789
                      </Typography>
                    </Stack>
                    <Divider sx={{ marginY: '.5rem' }} />

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ marginBottom: '.5rem' }}
                    >
                      <Typography variant="body2">Fecha de compra: 01/02/2023</Typography>

                      <Divider orientation="vertical" sx={{ marginX: '.5rem' }} />

                      <Typography variant="body2">Fecha de entrega: 03/02/2023</Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2">Vereda Garza, 24, Hab. 9</Typography>
                      <Chip variant="outlined" color="success" size="sm" sx={{ pointerEvents: 'none' }}>
                        Entregado
                      </Chip>
                    </Stack>
                  </CardContent>
                </Card>
              </ListItem>
            </List>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyShopping;
