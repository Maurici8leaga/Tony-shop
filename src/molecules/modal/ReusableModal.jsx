import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/joy/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const ReusableModal = (prop) => {
  const { open, handleClose, title, children } = prop;

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

export default ReusableModal;
