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
import Button from '@mui/joy/Button';
// component
import Spinner from '@molecules/loader/Spinner';
// static
import useLocalStorage from '@hooks/useLocalStorage';
import { authService } from '@services/api/auth/auth.service';
import { UtilsService } from '@services/utils/utils.service';
// css
import '@root/index.scss';
import '../register/Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state del form
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [setStoredUsername] = useLocalStorage('username', 'set');
  // de este  custom hook  el 1er parametro es el nombre del key y el 2do es la accion que tendra

  // state para si el user esta logeado o no
  const [user, setUser] = useState();

  // state for spinner
  const [loading, setLoading] = useState(false);

  // state para el password input
  const [showPassword, setShowPassword] = useState(false);

  // OJO CUANDO SE INTEGRE EL BACK SE DECIDIRA SI ES ESENCIAL ESTOS STATES
  // const [nameError, setNameError] = useState(false);
  // const [lastnameError, setLastNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [phoneNumberError, setPhoneNumberError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // state para mensaje error en los inputs
  // const [hasError, setHasError] = useState(false); // OJO ACTIVAR CUANDO SE INTEGRE EL BACK
  // state para convertir el input en error
  // const [errorMessage, setErrorMessage] = useState(false); // aqui ira el mensaje que mande el back si ocurre

  // para validar numero nacionales nada mas
  // const phoneNumberRE = /^(0414|0412|0416|0212)[0-9]{7}$/; //GUARDAR PARA VER SI SE NECESITA MAS ADELANTE

  const registerUser = async (event) => {
    setLoading(true); // para correr el spinner mientras el proceso
    event.preventDefault();

    try {
      const result = await authService.signup({
        name,
        lastname,
        email,
        phoneNumber,
        password
      });

      setStoredUsername(email);
      UtilsService.dispatchUser(result, dispatch, setUser);
      // setHasError(false); // OJO activar cuando se integre el backend
      // setErrorMessage(''); // OJO activar cuando se integre el backend
      // setNameError(false); // cuando se integre el back se decidira si es necesario o no
      // setLastNameError(false); // cuando se integre el back se decidira si es necesario o no
      // setEmailError(false); // cuando se integre el back se decidira si es necesario o no
      // setPhoneNumberError(false); // cuando se integre el back se decidira si es necesario o no
      // setPasswordError(false); // cuando se integre el back se decidira si es necesario o no
      // setConfirmPasswordError(false); // cuando se integre el back se decidira si es necesario o no
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // handlers para el password input
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // se tiene que pasar user y loading porque esto cada vez que cambie debe renderizar la pag
    if (loading && !user) return;
    if (user) navigate('/');
  }, [user, navigate, loading]);

  return loading ? (
    <Spinner />
  ) : (
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

            <Link variant="body2" underline="none" href="/login" sx={{ color: 'var(--blue)' }}>
              Ingresar
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
            id="input-name-register"
            label="Nombre"
            variant="outlined"
            value={name}
            type="text"
            placeholder="Tu nombre"
            required
            sx={{ marginY: 1, width: '100%' }}
            // error={nameError}
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
            // error={lastnameError}
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
            // error={emailError}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="input-phoneNumber-register"
            label="Telefono"
            variant="outlined"
            value={phoneNumber}
            type="tel"
            InputProps={{
              inputProps: {
                minLength: '11',
                maxLength: '11'
              }
            }}
            placeholder="041X-123-45-67"
            required
            sx={{ marginY: 1, width: '100%' }}
            // error={phoneNumberError}
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
            // error={passwordError}
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
            // error={confirmPasswordError}
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
