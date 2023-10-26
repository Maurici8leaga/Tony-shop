import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import IconButton from '@mui/material/IconButton';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
// component
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
import DirectionsModal from '@molecules/modal/directions-modal/DirectionsModal';
// css
import '../profile/Profile.scss';

const MyAddresses = () => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');

  // psra abrir y cerrar los modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container-profile">
      <Container fixed>
        <div className="container-grid-profile">
          <div className="menu-profile">
            {/* a este component a futuro se le debe pasar data para tener acceso al user */}
            <MenuProfile />
          </div>
          <div className="menu-profile-adaptive">
            {/* a este component a futuro se le debe pasar data para tener acceso al user */}
            <MenuProfileAdaptive />
          </div>
          <div className="profile-content">
            <Stack direction="row" justifyContent="start" alignItems="center" sx={{ width: '100%', marginY: '1rem' }}>
              <Typography variant="h5" sx={{ marginY: '1rem' }}>
                {' '}
                Direcciones
              </Typography>
            </Stack>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                overflowY: 'scroll'
              }}
            >
              {/* este stack va a multiplicarse por la cantidad que tenga el user en la DB */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: '100%', height: '60px', backgroundColor: '#eeee', marginY: '.5rem', padding: '10px' }}
              >
                <Stack direction="row" gap={1} alignItems="center" sx={{ width: '90%' }}>
                  <LocationOnOutlinedIcon />

                  <Typography variant="body2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor.
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <IconButton color="warning" onClick={handleOpen}>
                    {/* falta crear un modal especifico para editar la direccion */}
                    <CreateOutlinedIcon />
                  </IconButton>

                  <IconButton color="error">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>

            <DirectionsModal open={open} handleClose={handleClose} address={address} setAddress={setAddress} />

            <Stack direction="row" justifyContent="end" sx={{ width: '100%', marginY: '1rem' }}>
              <Button variant="contained" onClick={handleOpen}>
                Agregar direccion{' '}
              </Button>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyAddresses;
