import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// static
import Moto from '@assets/icons/motoIcon.svg';
import BreakIcon from '@assets/icons/breakIcon.svg';
import LubricIcon1 from '@assets/icons/lubricIcon.svg';
import MoreIcon from '@assets/icons/moreIcon.svg';
import NeumaticIcon from '@assets/icons/neumaticIcon.svg';
import OilIcon from '@assets/icons/oilIcon.svg';
import RefrigerantIcon from '@assets/icons/refrigerantIcon.svg';
import AccessoriesIcon from '@assets/icons/toolIcon.svg';
import YamahaLogo from '@assets/img/YamahaLogo.webp';
import BeraLogo from '@assets/img/BeraLogo.webp';
import KeewayLogo from '@assets/img/KeewayLogo.webp';
import HondaLogo from '@assets/img/HondaLogo.webp';
import KawasakiLogo from '@assets/img/KawasakiLogo.webp';
import SuzukiLogo from '@assets/img/SuzukiLogo.webp';

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

export const tonyShopDataInfo = {
  phone: '+584247396116',
  instagram: 'https://www.instagram.com/tonysmotoshop/',
  googleMaps:
    // eslint-disable-next-line quotes
    "https://www.google.com/maps/place/Tony's+Moto+Shop/@10.5147383,-66.9340293,19.83z/data=!4m13!1m7!3m6!1s0x8c2a5ef21782a55b:0x18763fb9daae6e9f!2sCalle+1ra+El+Caribe+%26+Av.+Sucre,+Caracas+1030,+Distrito+Capital!3b1!8m2!3d10.516114!4d-66.9405432!3m4!1s0x8c2a5f1f46436b0b:0x3d3fc3deeab140d!8m2!3d10.5147111!4d-66.9336983?hl=es"
};

export const navLinks = [
  { title: 'Productos', path: '#Products' },
  { title: 'Registrate', path: '/register' },
  { title: 'Ingresar', path: '/login' }
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
  { title: 'Registrate', path: '/register', icon: <PersonIcon /> },
  { title: 'Ingresar', path: '/login', icon: <PersonIcon /> },
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
  },
  {
    id: 5,
    imgProduct: 'https://www.cambio16.com/wp-content/uploads/2017/02/Schuberth-E1-Crossfire-640x640.jpg',
    nameProduct: 'Casco',
    priceProduct: '150',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 6,
    imgProduct: 'https://empresasnoffra.com/87000-large_default/pastilla-freno-chery-orinoco-todos-delantera.jpg',
    nameProduct: 'Pastillas de freno',
    priceProduct: '15',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 7,
    imgProduct: 'https://www.cambio16.com/wp-content/uploads/2017/02/Schuberth-E1-Crossfire-640x640.jpg',
    nameProduct: 'Casco',
    priceProduct: '150',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 8,
    imgProduct: 'https://empresasnoffra.com/87000-large_default/pastilla-freno-chery-orinoco-todos-delantera.jpg',
    nameProduct: 'Pastillas de freno',
    priceProduct: '15',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 9,
    imgProduct:
      'https://www.eluniverso.com/resizer/EmU7BmQQfCE9-HX7HCdtBgqeA9w=/740x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6OMBHHVNTVBWFO7DVPEXZZY4RA.jpg',
    nameProduct: 'Neumatico',
    priceProduct: '50',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 10,
    imgProduct: 'https://www.cambio16.com/wp-content/uploads/2017/02/Schuberth-E1-Crossfire-640x640.jpg',
    nameProduct: 'Casco',
    priceProduct: '150',
    descriptionProduct: 'El mejor del mercado...'
  },
  {
    id: 11,
    imgProduct: 'https://empresasnoffra.com/87000-large_default/pastilla-freno-chery-orinoco-todos-delantera.jpg',
    nameProduct: 'Pastillas de freno',
    priceProduct: '15',
    descriptionProduct: 'El mejor del mercado...'
  }
];

export const listCategory = [
  {
    id: 1,
    icon: Moto,
    name: 'Modelos'
  },
  {
    id: 2,
    icon: AccessoriesIcon,
    name: 'Accesorios'
  },
  {
    id: 3,
    icon: OilIcon,
    name: 'Aceites'
  },
  {
    id: 4,
    icon: BreakIcon,
    name: 'Frenos'
  },
  {
    id: 5,
    icon: LubricIcon1,
    name: 'Lubricantes'
  },
  {
    id: 6,
    icon: NeumaticIcon,
    name: 'Neumaticos'
  },
  {
    id: 7,
    icon: RefrigerantIcon,
    name: 'Refrigerante'
  },
  {
    id: 8,
    icon: MoreIcon,
    name: 'Ver Todo'
  }
];

export const listMotorcycleBrand = [
  { id: 1, img: BeraLogo },
  {
    id: 2,
    img: YamahaLogo
  },
  { id: 3, img: KeewayLogo },
  { id: 4, img: HondaLogo },
  { id: 5, img: KawasakiLogo },
  {
    id: 6,
    img: SuzukiLogo
  }
];

// fake data para categoria del menu de filtros
export const categoryMenuData = [
  { data: 'Lubricantes', num: 12, id: 1 },
  { data: 'Repuesto', num: 20, id: 2 },
  { data: 'Accesorio', num: 30, id: 3 },
  { data: 'Otros', num: 9, id: 4 }
];

// fake data para rango de precioss del menu del filtros
export const rangePrice = [
  { range: 'Hasta 5 USD$', mount: 5, id: 1 },
  { range: '1USD$ a 8 USD$', mount: 12, id: 2 },
  { range: 'Mas de 10 USD$', mount: 20, id: 3 }
];

export const rangeCalification = [
  { mount: 1, value: 5, id: 1 },
  { mount: 3, value: 4, id: 2 },
  { mount: 9, value: 3, id: 3 },
  { mount: 6, value: 2, id: 4 },
  { mount: 0, value: 1, id: 5 }
];
