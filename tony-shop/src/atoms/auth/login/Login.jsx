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
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/joy/Button';
import { mainColors } from '@services/utils/static.data';
import '@root/index.scss';

const Login = () => {
  const { lightBlue, strongRed } = mainColors;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // state del form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [checked, setChecked] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const loginUser = (event) => {
    event.preventDefault();
    setHasError(false);
    setErrorMessage('');
    setEmailError(false);
    setPasswordError(false);

    if (email === '') {
      setEmailError(true);
    }

    if (password === '' || password.length < 6) {
      setHasError(true);
      setErrorMessage('Contraseña invalida muy corta');
      setPasswordError(true);
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
          onSubmit={loginUser}
        >
          <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
            Bienvenido!
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignContent: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              No tienes una cuenta?
            </Typography>

            <Link variant="body2" underline="none" href="/register" sx={{ color: lightBlue }}>
              Registrarse
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

          <FormControlLabel
            value={checked}
            control={<Switch color="primary" id="checkbox" />}
            label="Mantenerme conectado"
            labelPlacement="end"
            checked={checked}
            onChange={handleCheckBox}
          />

          <Button variant="solid" size="lg" type="submit" sx={{ width: '100%', mt: 1 }}>
            Entrar
          </Button>
        </Box>
      </Sheet>
    </div>
  );
};

export default Login;
