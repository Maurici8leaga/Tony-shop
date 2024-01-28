import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import Modal from '@mui/material/Modal';
import Box from '@mui/joy/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const ReusableModal = (props) => {
  const { open, handleClose, title, children } = props;

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="directions modal" aria-describedby="modal for directions">
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '80%', sm: '500px' },
          height: 'auto',
          padding: '32px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ffff',
          borderRadius: '6px'
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: '1rem' }}>
          <Typography variant="h6">{title}</Typography>

          <IconButton onClick={handleClose}>
            <ClearOutlinedIcon />
          </IconButton>
        </Stack>

        {children}
      </Box>
    </Modal>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observe
ReusableModal.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ello
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default ReusableModal;
