import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/joy/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import TextField from '@mui/material/TextField';

// OJO FALTA AGREGAR LOGICA PARA GUARDAR LA NEW DIRECCION

const DirectionsModal = (prop) => {
  const { open, handleClose, address, setAddress } = prop;

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
          <Typography variant="h6">Agrega una dirección</Typography>

          <IconButton onClick={handleClose}>
            <ClearOutlinedIcon />
          </IconButton>
        </Stack>

        <Box
          component="form"
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: '1rem' }}
          gap={4}
        >
          <TextField
            id="new-address-user"
            label="Dirección"
            variant="standard"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />

          <Stack direction="row" justifyContent="end">
            <Button type="submit" variant="outlined">
              Guardar{' '}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default DirectionsModal;
