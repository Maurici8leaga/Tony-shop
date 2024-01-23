import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// static
import EmptyCar from '../../../assets/img/empty-shopping-car.png';

const EmptyShoppingCar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        marginY: '8rem'
      }}
    >
      <figure>
        <img src={EmptyCar} alt="empty-logo-car" style={{ width: '150px', marginY: '.5rem' }} />
      </figure>

      <Typography variant="h6" sx={{ color: 'var(--darkBlue)', marginY: '.5rem' }}>
        Tu carro esta vacio
      </Typography>

      <Typography variant="p" sx={{ color: 'grey', marginY: '.5rem' }}>
        Ve a conocer nuestros productos
      </Typography>

      <Button variant="contained" sx={{ marginY: '1rem' }} onClick={() => navigate('/category-menu/motorcycle')}>
        Ver productos
      </Button>
    </Box>
  );
};

export default EmptyShoppingCar;
