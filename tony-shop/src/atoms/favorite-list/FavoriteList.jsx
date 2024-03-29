import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CardOverflow from '@mui/joy/CardOverflow';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
import '../profile/Profile.scss';

const FavoriteList = () => {
  const [qtySelected, SetqtySelected] = useState(1);

  const addProduct = () => {
    SetqtySelected(qtySelected + 1);
  };

  const minusProduct = () => {
    if (qtySelected > 1) {
      SetqtySelected(qtySelected - 1);
    } else {
      SetqtySelected(1);
    }
  };

  return (
    <div className="container-profile">
      <Container fixed>
        <div className="container-grid-profile">
          <div className="menu-profile">
            <MenuProfile />
          </div>
          <div className="menu-profile-adaptive">
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
              <ListItem>
                <Card color="neutral" orientation="horizontal" variant="outlined" sx={{ width: '100%' }}>
                  <AspectRatio ratio="1" sx={{ width: 90, alignSelf: 'center' }}>
                    <img
                      srcSet="https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275"
                      loading="lazy"
                      alt="img-product"
                    />
                  </AspectRatio>

                  <CardContent>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent={{ xs: 'center', sm: 'space-between' }}
                      alignItems="center"
                      gap={1}
                    >
                      <Typography variant="subtitle2" align="justify">
                        Casco Integral Hro518 Cremer...
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'grey' }}>
                        Precio $11.11
                      </Typography>
                    </Stack>

                    <Divider sx={{ marginY: '.5rem' }} />

                    <Stack
                      direction={{ xs: 'row', sm: 'row' }}
                      justifyContent="center"
                      alignItems="center"
                      spacing={{ xs: 1, sm: 2 }}
                      sx={{ marginY: '.5rem' }}
                    >
                      <IconButton size="small" color="primary" onClick={addProduct}>
                        <AddCircleOutlineIcon />
                      </IconButton>

                      <Typography variant="body2">{qtySelected} un</Typography>

                      <IconButton
                        size="small"
                        color="primary"
                        disabled={qtySelected === 1 && true}
                        onClick={minusProduct}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Stack>
                  </CardContent>

                  <CardOverflow
                    sx={{
                      px: 0.2,
                      writingMode: 'vertical-rl',
                      textAlign: 'center'
                    }}
                  >
                    <Checkbox />

                    <IconButton color="error">
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </CardOverflow>
                </Card>
              </ListItem>
            </List>

            <Stack direction="row" justifyContent="end" sx={{ width: '100%', marginY: '1rem' }}>
              <Button variant="contained">Agregar al carro </Button>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FavoriteList;
