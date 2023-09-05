import React from 'react';

import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

// cosas para el form
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

// cosas para el input
import { styled } from '@mui/joy/styles';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// css
import '../auth/Register.scss';

// static
import { InnerInput } from './prueba';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="prueba">
      <Sheet variant="outlined" sx={{ mt: 12 }} className="bg-prueba">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // flexDirection: { xs: 'column', md: 'column' },
            width: 450,
            height: 500,
            // alignItems: 'center',
            // justifyContent: 'start'
            alignItems: 'flex-start',
            justifyContent: 'start',
            bgcolor: '#fff',
            ml: 15,
            mt: 15
          }}
        >
          <Typography variant="h4">Crea una cuenta</Typography>

          <TextField id="outlined-basic" label="Nombre" variant="outlined" type="text" required placeholder="Juan" />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" type="text" required placeholder="Perez" />
          <TextField
            id="outlined-basic"
            label="Correo"
            variant="outlined"
            type="email"
            required
            placeholder="correo@gmail.com"
          />
          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            type="tel"
            required
            placeholder="+584141234567"
          />
          {/* <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required />
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" required /> */}

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="solid" size="lg" sx={{ width: '100%' }}>
            Crear
          </Button>

          <Typography variant="p">Ya tienes cuenta?</Typography>
        </Box>
      </Sheet>
    </div>
  );
};

export default Register;
