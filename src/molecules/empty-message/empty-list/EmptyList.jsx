import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// static
import EmptyBox from '../../../assets/img/empty-box.png';

const EmptyList = (prop) => {
  const { title, subtitle, btnText } = prop;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center'
      }}
    >
      <figure>
        <img src={EmptyBox} alt="empty-box-logo" style={{ width: '150px', marginY: '.5rem' }} />
      </figure>

      <Typography variant="h5" sx={{ color: 'var(--darkBlue)', marginY: '.5rem' }}>
        {title}
      </Typography>

      <Typography variant="p" sx={{ color: 'grey', marginY: '.5rem' }}>
        {subtitle}
      </Typography>

      <Button variant="contained" sx={{ marginY: '1rem' }} onClick={() => navigate('/category-menu/motorcycle')}>
        {btnText}
      </Button>
    </Box>
  );
};

export default EmptyList;
