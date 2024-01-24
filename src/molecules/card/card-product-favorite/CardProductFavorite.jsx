import React from 'react';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CardOverflow from '@mui/joy/CardOverflow';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CardProductFavorite = (prop) => {
  // Falta agregar logica para eliminar elemento de la lista
  const { img, title, price, addProduct, minusProduct, qtySelected, handleChange } = prop;

  return (
    <Card color="neutral" orientation="horizontal" variant="outlined" sx={{ width: '100%' }}>
      <AspectRatio ratio="1" sx={{ width: 90, alignSelf: 'center' }}>
        <img
          srcSet={img}
          loading="lazy"
          alt="img-product" // colorcar un alt org
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
            {/* Incorporar logica para reducir el titulo */}
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'grey' }}>
            Precio ${price}
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

          <IconButton size="small" color="primary" disabled={qtySelected === 1 && true} onClick={minusProduct}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Stack>
      </CardContent>

      <CardOverflow
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl', // este hace que el checkbox quede mejor verticalmente
          textAlign: 'center'
        }}
      >
        <Checkbox value={'id-prueba-01'} onChange={handleChange} />
        {/* IMPORTANTE se debe usarse el id del elemento como value para asi pueda usarse para buscar en el carrito */}

        <IconButton color="error">
          {/* // Falta agregar logica para eliminar elemento de la lista */}
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </CardOverflow>
    </Card>
  );
};

export default CardProductFavorite;