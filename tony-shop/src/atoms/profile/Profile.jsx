import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Box from '@mui/joy/Box';
import TextField from '@mui/material/TextField';
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';
import '../profile/Profile.scss';

const Profile = () => {
  const [name, setName] = useState('Mauricio');
  const [lastname, setLastName] = useState('Oleaga');
  const [nId, setNId] = useState(23714702);
  const [phoneNumber, setPhoneNumber] = useState('+56944872031');
  const [email, setEMail] = useState('maoa2000@gmail.com');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankAccountType, setBankAccountType] = useState('');

  return (
    <div className="container-profile">
      <Container fixed>
        <div className="container-grid-profile">
          <div className="menu-profile">
            <MenuProfile />
          </div>
          <div className="menu-profile-adaptive">
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

              <IconButton aria-label="edit" color="primary">
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
