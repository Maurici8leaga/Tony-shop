import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Box from '@mui/joy/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// component
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
import ReusableModal from '@molecules/modal/ReusableModal';
// static
import useLocalStorage from '@hooks/useLocalStorage';
// ccss
import '../profile/Profile.scss';

const Profile = () => {
  // user data from store
  // const user = useSelector((state) => state.user); // OJO FALTA IMPLEMENTAR
  // useSelector es un hook  de react-redux que permite extraer data del state de store

  const navigate = useNavigate();

  // OJO aqui la data debe venir por defecto debe venir del back
  const [name, setName] = useState('Mauricio');
  const [lastname, setLastName] = useState('Oleaga');
  const [nId, setNId] = useState(23714702);
  const [phoneNumber, setPhoneNumber] = useState('+56944872031');
  const [email, setEMail] = useState('maoa2000@gmail.com');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankAccountType, setBankAccountType] = useState('');

  // state for modal
  const [open, setOpen] = useState(false);

  // state para el local storage
  const [setStoredUsername] = useLocalStorage('username', 'get'); // este es un  custom hook

  // para abrir y cerrar los modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!setStoredUsername) return navigate('/');
  }, [navigate, setStoredUsername]);

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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%', marginY: '1rem' }}
            >
              <Typography variant="h5" sx={{ marginY: '1rem' }}>
                {' '}
                Datos personales
              </Typography>

              <IconButton aria-label="edit" color="primary" onClick={handleOpen}>
                <CreateOutlinedIcon />
              </IconButton>
            </Stack>
            <Box
              component="form"
              autoComplete="off"
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}
            >
              <Box className="box-form-fixed">
                <TextField
                  id="name-user"
                  label="Nombre"
                  variant="standard"
                  type="text"
                  value={name}
                  disabled
                  onChange={(event) => setName(event.target.value)}
                  className="input-width-fixed"
                />

                <TextField
                  id="lastname-user"
                  label="Apellido"
                  variant="standard"
                  type="text"
                  value={lastname}
                  disabled
                  onChange={(event) => setLastName(event.target.value)}
                  className="input-width-fixed"
                />
              </Box>

              <Box className="box-form-fixed">
                <TextField
                  id="document-number-user"
                  label="Nº Documento"
                  variant="standard"
                  type="number"
                  value={nId}
                  disabled
                  onChange={(event) => setNId(event.target.value)}
                />

                <TextField
                  id="phone-number-user"
                  label="Telefono"
                  variant="standard"
                  type="tel"
                  value={phoneNumber}
                  disabled
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />

                <TextField
                  id="email-user"
                  label="Correo"
                  variant="standard"
                  type="text"
                  value={email}
                  disabled
                  onChange={(event) => setEMail(event.target.value)}
                />
              </Box>
            </Box>

            <ReusableModal open={open} handleClose={handleClose} title={'Actualizar mis datos'}>
              <Box
                component="form"
                autoComplete="off"
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: '1rem' }}
                gap={4}
              >
                <TextField
                  id="input-name"
                  label="Nombre"
                  variant="standard"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  id="input-lastname"
                  label="Apellido"
                  variant="standard"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <TextField
                  id="input-document-number"
                  label="Nº Documento"
                  variant="standard"
                  type="number"
                  value={nId}
                  onChange={(e) => setNId(e.target.value)}
                />

                <TextField
                  id="input-phone-number"
                  label="Telefono"
                  variant="standard"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <TextField
                  id="input-email"
                  label="Correo"
                  variant="standard"
                  type="text"
                  value={email}
                  onChange={(e) => setEMail(e.target.value)}
                />

                <Stack direction="row" justifyContent="end">
                  <Button type="submit" variant="outlined">
                    Guardar{' '}
                  </Button>
                </Stack>
              </Box>
            </ReusableModal>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%', marginY: '1rem' }}
            >
              <Typography variant="h5" sx={{ marginY: '1rem' }}>
                {' '}
                Datos bancarios
              </Typography>

              <IconButton aria-label="edit" color="primary">
                <CreateOutlinedIcon />
              </IconButton>
            </Stack>

            <Box
              component="form"
              autoComplete="off"
              sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem' }}
              gap={4}
              className="box-form-fixed"
            >
              <TextField
                id="bank-name"
                label="Banco"
                variant="standard"
                type="text"
                value={bankName}
                disabled
                onChange={(event) => setBankName(event.target.value)}
              />

              <TextField
                id="bank-account-type"
                label="Tipo de cuenta"
                variant="standard"
                type="text"
                value={bankAccountType}
                disabled
                onChange={(event) => setBankAccountType(event.target.value)}
              />

              <TextField
                id="account-number-bank"
                label="Numero de cuenta"
                variant="standard"
                type="text"
                value={accountNumber}
                disabled
                onChange={(event) => setAccountNumber(event.target.value)}
              />
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
