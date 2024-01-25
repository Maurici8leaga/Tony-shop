import React, { useState } from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/joy/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const HorizontalCard = (props) => {
  const { inputRef, imgProduct, nameProduct, priceProduct } = props;

  // state for qty product selected
  const [qtySelected, SetqtySelected] = useState(1);

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

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      color="neutral"
      sx={{
        width: 300,
        '&:hover': { boxShadow: 'md', borderColor: 'var(--darkBlue)' },
        my: 2
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img src={imgProduct} alt={`img_${nameProduct}`} />
      </AspectRatio>

      <CardContent>
        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
          <Typography level="title-lg" id="card-description" sx={{ flexGrow: 1 }}>
            {/* colocar logica para recortar el nombre y no se extienda tanto */}
            {nameProduct}
          </Typography>

          <IconButton color="danger" size="sm" variant="plain">
            {/* falta logica para eliminar elemento */}
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2} sx={{ py: 2, justifyContent: 'space-between', alignItems: 'center' }} direction={'row'}>
          <Typography level="title-lg" id="card-price-description" sx={{ flexGrow: 1 }}>
            {`$${priceProduct}`}
          </Typography>

          <Stack direction={{ xs: 'row', sm: 'row' }} justifyContent="center" alignItems="center" spacing={1}>
            <IconButton size="small" color="primary" onClick={addProduct}>
              <AddCircleOutlineIcon />
            </IconButton>

            <Typography variant="body2">{qtySelected}</Typography>

            <IconButton size="small" color="primary" disabled={qtySelected === 1 && true} onClick={minusProduct}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observe
HorizontalCard.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ellos
  imgProduct: PropTypes.string.isRequired,
  nameProduct: PropTypes.string.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  priceProduct: PropTypes.number.isRequired,
  inputRef: PropTypes.any // OJO ESTE PUEDE ELIMINARSE SI NO SE DEFINE BIEN SU FUNCION
};

export default HorizontalCard;
