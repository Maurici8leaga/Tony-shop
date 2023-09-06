import { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/joy/Button';
// static
import { mainColors } from '@services/utils/static.data';
// css
import '../auth/Register.scss';

const Register = () => {
  const { lightBlue, strongRed } = mainColors;

  // state para el password input
  const [showPassword, setShowPassword] = useState(false);

  // handlers para el password input
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // state del form
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // state para mensaje error en los inputs
  const [hasError, setHasError] = useState(false);
  // state para convertir el input en error
  const [errorMessage, setErrorMessage] = useState(false);

  const registerUser = (event) => {
    event.preventDefault();
    setHasError(false);
    setErrorMessage('mensaje del back');

    if (name === '') {
      setNameError(true);
    }

    if (lastname === '') {
      setLastNameError(true);
    }

    if (email === '') {
      setEmailError(true);
    }

    if (phoneNumber === '') {
      setPhoneNumberError(true);
    }

    if (password === '') {
      setPasswordError(true);
    }

    if (confirmPassword !== password || confirmPassword === '') {
      setConfirmPasswordError(true);
    }
  };

  return (
    <div className="bg-prueba ">
      <Sheet variant="plain" sx={{ pt: 10, background: 'none' }}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 450,
            height: 'auto',
            alignItems: 'flex-start',
            justifyContent: 'start',
            ml: 15,
            marginY: 15,
            padding: 5
          }}
          className="glass-bg"
          onSubmit={registerUser}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Crea tu cuenta
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignContent: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Ya tienes una cuenta?
            </Typography>

            <Link variant="body2" underline="none" href="/login" sx={{ color: lightBlue }}>
              Ingresar
            </Link>
          </Box>

          {hasError && errorMessage ? (
            <Typography variant="body2" sx={{ color: strongRed }}>
              Mensaje del back
            </Typography>
          ) : (
            ''
          )}

          <TextField
            id="input-name-register"
            label="Nombre"
            variant="outlined"
            value={name}
            type="text"
            placeholder="Tu nombre"
            required
            sx={{ marginY: 1, width: '100%' }}
            error={nameError}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="input-lastname-register"
            label="Apellido"
            variant="outlined"
            value={lastname}
            type="text"
            placeholder="Tu apellido"
            required
            sx={{ marginY: 1, width: '100%' }}
            error={lastnameError}
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            id="input-email-register"
            label="Correo"
            variant="outlined"
            value={email}
            type="email"
            placeholder="Tu correo"
            required
            sx={{ marginY: 1, width: '100%' }}
            error={emailError}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="input-phoneNumber-register"
            label="Telefono"
            variant="outlined"
            value={phoneNumber}
            type="tel"
            placeholder="04161234567"
            required
            sx={{ marginY: 1, width: '100%' }}
            error={phoneNumberError}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <TextField
            id="input-password-register"
            label="Contraseña"
            variant="outlined"
            value={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Almenos 6 caracteres"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            required
            sx={{ marginY: 1, width: '100%' }}
            error={passwordError}
            onChange={(event) => setPassword(event.target.value)}
          />

          <TextField
            id="input-confirmPassword-register"
            label="Confirme contraseña"
            variant="outlined"
            value={confirmPassword}
            type={showPassword ? 'text' : 'password'}
            placeholder="Repita la contraseña"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            required
            sx={{ marginY: 1, width: '100%' }}
            error={confirmPasswordError}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button variant="solid" size="lg" type="submit" sx={{ width: '100%', mt: 1 }}>
            Registrarse
          </Button>
        </Box>
      </Sheet>
    </div>
  );
};

export default Register;
