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

// las imagenes se tiene que ver si se van a dejar local en el proyecto o se va llevar a cloudinary
export const dataCarousel = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/maurici8leaga/image/upload/v1692388463/tony_shop_efnpjg.webp',
    titleImg: 'Tony-Store',
    titleh1: 'Tonys Moto Shop',
    titleh2: null,
    subtitle: 'Tenemos tienda fisica',
    btnText: 'VISITAR'
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/maurici8leaga/image/upload/v1692388509/tonyShop_box_tskfbg.webp',
    titleImg: 'Products',
    title: null,
    titleh2: 'Tenemos variedad de productos y repuestos',
    subtitle: null,
    btnText: 'VER PRODUCTOS'
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/maurici8leaga/image/upload/v1692388535/tonyShop_delivery_dg2cgq.webp',
    titleImg: 'Delivery',
    titleh1: null,
    titleh2: 'Contamos con delivery por toda Caracas',
    subtitle: null,
    btnText: 'PEDIR DELIVERY'
  }
];

export const listaProductosPrueba = [
  {
    id: 1,
    imgProduct: 'https://www.cambio16.com/wp-content/uploads/2017/02/Schuberth-E1-Crossfire-640x640.jpg',
    nameProduct: 'Casco',
    priceProduct: '150',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 2,
    imgProduct: 'https://empresasnoffra.com/87000-large_default/pastilla-freno-chery-orinoco-todos-delantera.jpg',
    nameProduct: 'Pastillas de freno',
    priceProduct: '15',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 3,
    imgProduct:
      'https://www.eluniverso.com/resizer/EmU7BmQQfCE9-HX7HCdtBgqeA9w=/740x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6OMBHHVNTVBWFO7DVPEXZZY4RA.jpg',
    nameProduct: 'Neumatico',
    priceProduct: '50',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 4,
    imgProduct: 'https://www.autonocion.com/wp-content/uploads/2018/06/Aceite-motor-2.jpg',
    nameProduct: 'Aceite',
    priceProduct: '15',
    descriptionProduct: 'El mejor del mercado...'
  }
];
