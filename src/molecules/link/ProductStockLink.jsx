import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/material/Typography';

const ProductStockLink = (props) => {
  const { data, amount, href, click, functionOnClick } = props;
  // aqui falta pasar los href que vendran de la db para cuando el user seleccione una opcion

  // OJO REVISAR PARA QUE ES EL CLICK Y EL functionOnClick

  return (
    <>
      {click ? (
        <ListItemButton
          color="string"
          component="a"
          href={href || '#'}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--darkBlue)',
            background: 'transparent',
            '&:hover': {
              color: 'var(--red)'
            }
          }}
          onClick={functionOnClick}
        >
          {data}
          <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}> ({amount})</Typography>
        </ListItemButton>
      ) : (
        <ListItemButton
          color="string"
          component="a"
          href={href || '#'}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--darkBlue)',
            background: 'transparent',
            '&:hover': {
              color: 'var(--red)'
            }
          }}
        >
          {data}
          <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}> ({amount})</Typography>
        </ListItemButton>
      )}
    </>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observer
ProductStockLink.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ellos
  data: PropTypes.string.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  amount: PropTypes.number.isRequired,
  href: PropTypes.string,
  // si el prop no lleva isRequired, significa que su presencia en el component puede ser opcional
  click: PropTypes.bool,
  functionOnClick: PropTypes.func
};

export default ProductStockLink;
