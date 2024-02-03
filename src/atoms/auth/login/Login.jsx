import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
// component
import Spinner from '@molecules/loader/Spinner';
// static
import useLocalStorage from '@hooks/useLocalStorage';
import useSessionStorage from '@hooks/useSessionStorage';
import { authService } from '@services/api/auth/auth.service';
import { UtilsService } from '@services/utils/utils.service';
// scss
import '@root/index.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state para el password input
  const [showPassword, setShowPassword] = useState(false);

  // state del form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // OJO CUANDO SE INTEGRE EL BACK SE DECIDIRA SI ES ESENCIAL ESTOS STATES
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  // state for checkbox
  const [checked, setChecked] = useState(false);

  // state para si el user esta logeado o no
  const [user, setUser] = useState();

  // state para mensaje error en los inputs
  // const [hasError, setHasError] = useState(false); // OJO activar cuando se integre el backend
  // state para convertir el input en error
  // const [errorMessage, setErrorMessage] = useState(false); // OJO activar cuando se integre el backend

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const { data } = await authService.signIn();

      // OJO ESTE PROCESO DE VALIDACION ES TEMPORAL HASTA QUE SE CREE EL BACK

      // buscar si el email ingresado existe en la db
      const userData = data.find((item) => {
        return item.email === email;
      });

      // validacion de email y password ingresado con los que estan guardados
      if (userData !== undefined && userData.password === password) {
        UtilsService.dispatchUser(userData, dispatch, setUser);
      } else {
        alert('Credenciales invalidas');
      }
    } catch (error) {
      console.error(error);
    }
    // setHasError(false); // OJO activar cuando se integre el backend
    // setErrorMessage(''); // OJO activar cuando se integre el backend
    // setEmailError(false); // cuando se integre el back se decidira si es necesario o no
    // setPasswordError(false); // cuando se integre el back se decidira si es necesario o no

    // OJO ESTO ES TEMPORAAL va cambiar cuando se integre con el backend y solo pasara los errores que de el backend
    // se creara un state para los mensajes el cual llevara los mensajes que de el back
    // if (email === '') {
    //   setEmailError(true);
    // }

    // if (password === '' || password.length < 6) {
    //   setHasError(true);
    //   // setErrorMessage('Contraseña invalida muy corta');
    //   // setPasswordError(true);
    // }
  };

  // handlers para el password input
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // handlers para el check box
  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
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

            <Link variant="body2" underline="none" href="/register" sx={{ color: 'var(--blue)' }}>
              Registrarse
            </Link>
          </Box>

          {/* NO BORRAR, ESTO IRA CUANDO SE INTEGRE CON EL BACK */}
          {/* {hasError && errorMessage ? (
            <Typography variant="body2" sx={{ color: 'var(--red)' }}>
              {errorMessage}
            </Typography>
          ) : (
            ''
          )} */}

          <TextField
            id="input-email-register"
            label="Correo"
            variant="outlined"
            value={email}
            type="email"
            placeholder="Tu correo"
            sx={{ marginY: 1, width: '100%' }}
            // error={emailError}
            onChange={(event) => setEmail(event.target.value)}
            required
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
              ),
              inputProps: {
                minLength: '6',
                maxLength: '15'
              }
            }}
            sx={{ marginY: 1, width: '100%' }}
            // error={passwordError}
            onChange={(event) => setPassword(event.target.value)}
            required
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
