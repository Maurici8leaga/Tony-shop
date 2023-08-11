import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export const mainColors = {
  darkBlue: '#041562',
  lightBlue: '#11468f',
  strongRed: '#da1212',
  lightWhite: '#eeeeee'
};

export const secondaryColor = {
  grey400: 'rgb(189, 189, 189, 0.25)',
  grey700: 'rgb(97, 97, 97, 0.15)',
  white025: 'rgb(255, 255, 255, 0.25)',
  white015: 'rgb(255, 255, 255, 0.15)'
};

export const navLinks = [
  { title: 'Productos', path: '#Products' },
  { title: 'Registrate', path: '#Signup' }
];

export const drawerLinks = [
  { title: 'Modelos', path: '#BykeModels', icon: <SettingsSuggestIcon /> },
  { title: 'Accesorios', path: '#Accessories', icon: <SettingsSuggestIcon /> },
  { title: 'Aceites', path: '#Oils', icon: <SettingsSuggestIcon /> },
  { title: 'Frenos', path: '#Breaks', icon: <SettingsSuggestIcon /> },
  { title: 'Lubricantes', path: '#Lubricants', icon: <SettingsSuggestIcon /> },
  { title: 'Neumaticos', path: '#Tires', icon: <SettingsSuggestIcon /> },
  { title: 'Refrigerante', path: '#Refrigerant', icon: <SettingsSuggestIcon /> },
  { title: 'Ver todo', path: '#AllProducts', icon: <MoreHorizIcon /> },
  { title: 'Registrate', path: '#SignUp', icon: <PersonIcon /> },
  { title: 'Contacto', path: '#Contact', icon: <PhoneIphoneIcon /> }
];

// temporal porque esto va a cambiar con la base de datos y el backend
export const bykeModels = [
  { title: 'Bera' },
  { title: 'Honda' },
  { title: 'Kawasaki' },
  { title: 'Suzuki' },
  { title: 'Yamaha' }
];

export const imgPruebaProduct = 'https://static.thenounproject.com/png/1375593-200.png';
