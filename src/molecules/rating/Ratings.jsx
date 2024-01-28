import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';
import Rating from '@mui/material/Rating';

const Ratings = ({ stars, mount }) => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>
      <Rating name="rating-product" value={stars} readOnly sx={{ mt: 1, mb: 1 }} />
      {/* el value del rating tiene que venir del backend */}
      <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
        {/* aqui debe pasarse la data original que vendra del baackend */}({mount})
      </Typography>
    </Stack>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observe
Ratings.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ello
  stars: PropTypes.number.isRequired,
  mount: PropTypes.number.isRequired //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
};

export default Ratings;
