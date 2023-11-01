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
import { mainColors } from '@services/utils/static.data';
import '@root/index.scss';
import '../register/Register.scss';

const Register = () => {
  const { lightBlue, strongRed } = mainColors;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // regular expression for validated phone numbers
  const phoneNumberRE = /^(0414|0412|0416|0212)[0-9]{7}$/;

  const registerUser = (event) => {
    event.preventDefault();
    setHasError(false);
    setErrorMessage('');
    setNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPhoneNumberError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (name === '') {
      setNameError(true);
    }

    if (lastname === '') {
      setLastNameError(true);
    }

    if (email === '') {
      setEmailError(true);
    }

    if (phoneNumber === '' || phoneNumberRE.test(phoneNumber) === false) {
      setHasError(true);
      setErrorMessage('Numero invalido');
      setPhoneNumberError(true);
    }

    if (password === '' || password.length < 6) {
      setHasError(true);
      setErrorMessage('Contraseña invalida muy corta');
      setPasswordError(true);
    }

    if (confirmPassword !== password || confirmPassword === '') {
      setHasError(true);
      setErrorMessage('La contraseña no coincide');
      setConfirmPasswordError(true);
    }
  };

  return (
    <div className="bg-mt-img">
      <Sheet variant="plain" sx={{ pt: 10, background: 'none' }}>
        <Box
          component="form"
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: 300, sm: 350, md: 400, lg: 450 },
            height: 'auto',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: { xs: 'center', md: 'start' },
            ml: { xs: 'auto', md: 15 },
            mr: { xs: 'auto', md: '0' },
            marginY: { xs: 7, sm: 10, lg: 15 },
            padding: { xs: 3, sm: 5 }
          }}
          className="glass-bg"
          onSubmit={registerUser}
        >
          <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
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
              {errorMessage}
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
