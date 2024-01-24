import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// static
import EmptyBox from '../../../assets/img/empty-box.png';

const EmptyList = (props) => {
  const { title, subtitle, btnText } = props;
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

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observer
EmptyList.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ellos
  title: PropTypes.string.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  subtitle: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired
};

export default EmptyList;
