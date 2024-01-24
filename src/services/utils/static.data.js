import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// static
import BreakIcon from '@assets/icons/breakIcon.svg';
import LubricIcon1 from '@assets/icons/lubricIcon.svg';
import NeumaticIcon from '@assets/icons/neumaticIcon.svg';
import OilIcon from '@assets/icons/oilIcon.svg';
import RefrigerantIcon from '@assets/icons/refrigerantIcon.svg';
import AccessoriesIcon from '@assets/icons/toolIcon.svg';
import EngineIcon from '@assets/icons/engineIcon.svg';
import HeadLightIcon from '@assets/icons/headlightIcon.svg';
import MotorcycleCaseIcon from '@assets/icons/motorcycleCase.svg';
import RimIcon from '@assets/icons/rimsIcon.svg';
import SparkPlugIcon from '@assets/icons/sparkPlugIcon.svg';
import transmissionIcon from '@assets/icons/transmissionIcon.svg';
import YamahaLogo from '@assets/img/YamahaLogo.webp';
import BeraLogo from '@assets/img/BeraLogo.webp';
import KeewayLogo from '@assets/img/KeewayLogo.webp';
import HondaLogo from '@assets/img/HondaLogo.webp';
import KawasakiLogo from '@assets/img/KawasakiLogo.webp';
import SuzukiLogo from '@assets/img/SuzukiLogo.webp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
  { title: 'Modelos', path: '/category-menu/motorcycle' },
  { title: 'Productos', path: '/#listCatg' },
  { title: 'Registrate', path: '/register' },
  { title: 'Ingresar', path: '/login' }
];

export const drawerLinks = [
  { title: 'Aceites', path: '/list-of-products/Aceites', icon: <SettingsSuggestIcon /> },
  { title: 'Autoperiquitos', path: '/list-of-products/Autoperiquitos', icon: <SettingsSuggestIcon /> },
  { title: 'Carenado', path: '/list-of-products/Carenado', icon: <SettingsSuggestIcon /> },
  { title: 'Encendido', path: '/list-of-products/Encendido', icon: <SettingsSuggestIcon /> },
  { title: 'Frenos', path: '/list-of-products/Frenos', icon: <SettingsSuggestIcon /> },
  { title: 'Iluminacion', path: '/list-of-products/Iluminacion', icon: <SettingsSuggestIcon /> },
  { title: 'Lubricantes', path: '/list-of-products/Lubricantes', icon: <SettingsSuggestIcon /> },
  { title: 'Modelos de moto', path: '/category-menu/motorcycle', icon: <SettingsSuggestIcon /> },
  { title: 'Motor', path: '/list-of-products/Motor', icon: <SettingsSuggestIcon /> },
  { title: 'Neumaticos', path: '/list-of-products/Neumaticos', icon: <SettingsSuggestIcon /> },
  { title: 'Refrigeracion', path: '/list-of-products/Refrigeracion', icon: <SettingsSuggestIcon /> },
  { title: 'Rines', path: '/list-of-products/Rines', icon: <SettingsSuggestIcon /> },
  { title: 'Transmision', path: '/list-of-products/Transmision', icon: <SettingsSuggestIcon /> },
  { title: 'Registrate', path: '/register', icon: <PersonIcon /> },
  { title: 'Ingresar', path: '/login', icon: <PersonIcon /> },
  { title: 'Contacto', path: '#', icon: <PhoneIphoneIcon /> }
];

// temporal porque esto va a cambiar con la base de datos y el backend
export const bykeModels = [
  { title: 'Bera' },
  { title: 'Honda' },
  { title: 'Kawasaki' },
  { title: 'Suzuki' },
  { title: 'Yamaha' }
];

export const imgPruebaProduct = 'https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275';

// las imagenes se tiene que ver si se van a dejar local en el proyecto o se va llevar a cloudinary
export const dataCarousel = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/maurici8leaga/image/upload/v1692388463/tony_shop_efnpjg.webp',
    titleImg: 'Tony-Store',
    titleh1: 'Tonys Moto Shop',
    titleh2: null,
    subtitle: 'Tenemos tienda fisica',
    btnText: 'VISITAR',
    href:
      // eslint-disable-next-line quotes
      "https://www.google.com/maps/place/Tony's+Moto+Shop/@10.5147383,-66.9340293,19.83z/data=!4m13!1m7!3m6!1s0x8c2a5ef21782a55b:0x18763fb9daae6e9f!2sCalle+1ra+El+Caribe+%26+Av.+Sucre,+Caracas+1030,+Distrito+Capital!3b1!8m2!3d10.516114!4d-66.9405432!3m4!1s0x8c2a5f1f46436b0b:0x3d3fc3deeab140d!8m2!3d10.5147111!4d-66.9336983?hl=es"
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/maurici8leaga/image/upload/v1692388509/tonyShop_box_tskfbg.webp',
    titleImg: 'Products',
    title: null,
    titleh2: 'Tenemos variedad de productos y repuestos',
    subtitle: null,
    btnText: 'VER PRODUCTOS',
    href: '/#listCatg'
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/maurici8leaga/image/upload/v1692388535/tonyShop_delivery_dg2cgq.webp',
    titleImg: 'Delivery',
    titleh1: null,
    titleh2: 'Contamos con delivery por toda Caracas',
    subtitle: null,
    btnText: 'PEDIR DELIVERY',
    href: '#'
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
    icon: OilIcon,
    name: 'Aceites'
  },
  {
    id: 2,
    icon: AccessoriesIcon,
    name: 'Autoperiquitos'
  },
  {
    id: 3,
    icon: MotorcycleCaseIcon,
    name: 'Carenado'
  },
  {
    id: 4,
    icon: SparkPlugIcon,
    name: 'Encendido'
  },
  {
    id: 5,
    icon: BreakIcon,
    name: 'Frenos'
  },
  {
    id: 6,
    icon: HeadLightIcon,
    name: 'Iluminacion'
  },
  {
    id: 7,
    icon: LubricIcon1,
    name: 'Lubricantes'
  },
  {
    id: 8,
    icon: EngineIcon,
    name: 'Motor'
  },
  {
    id: 9,
    icon: NeumaticIcon,
    name: 'Neumaticos'
  },
  {
    id: 10,
    icon: RefrigerantIcon,
    name: 'Refrigeracion'
  },
  {
    id: 11,
    icon: RimIcon,
    name: 'Rines'
  },
  {
    id: 12,
    icon: transmissionIcon,
    name: 'Transmision'
  }
];

export const listMotorcycleBrand = [
  {
    id: 1,
    img: BeraLogo,
    name: 'Bera'
  },
  {
    id: 2,
    img: YamahaLogo,
    name: 'Yamaha'
  },
  {
    id: 3,
    img: KeewayLogo,
    name: 'Keeway'
  },
  { id: 4, img: HondaLogo, name: 'Honda' },
  { id: 5, img: KawasakiLogo, name: 'kawasaki' },
  {
    id: 6,
    img: SuzukiLogo,
    name: 'Suzuki'
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

export const imgsProduct = [
  { id: 1, img: 'https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275' },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vW2ZGX96EGYANmWC0lf5hMP15jAGuV-K9fb0GQoUhnwLNOybsrAuJBRp_YpPQNzP6Pk&usqp=CAU'
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7xhvZAEtfZBmxQGVGHWGJRWBp3I0sFV3SYPn9zqjQofUerr6UYaFBQsyQ_N_lqWt3Z0&usqp=CAU'
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSyB0T6VoY4C2hudY6QUdpQTJVt2ppuCyjomDNqUJf20x3SrvQMxzU_FG8jQKdMFGr3E&usqp=CAU'
  }
];

export const caracteristicasProductoTabla = [
  { Marca: 'AGV' },
  { Línea: 'K1' },
  { Modelo: 'Pista GP R' },
  { Norma: 'ECE 22 05' },
  { Tipo: 'Integral' },
  { Edad: 'Adulto' }
];

export const opcionMenuProfile = [
  { id: 1, type: 'Mis datos', icon: <PersonOutlineOutlinedIcon />, url: '/account/profile' },
  { id: 2, type: 'Direcciones', icon: <MapOutlinedIcon />, url: '/account/myAddresses' },
  { id: 3, type: 'Compras', icon: <ShoppingBagOutlinedIcon />, url: '/account/myShopping' },
  { id: 4, type: 'Favoritos', icon: <FavoriteBorderOutlinedIcon />, url: '/account/favorites' }
];

export const arrayFakeMyShopping = [
  {
    id: 123456789,
    img: 'https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275',
    title: 'Titulo producto',
    purchased: '01/02/2023',
    delivered: '03/02/2023',
    direction: 'Vereda Garza, 24, Hab. 9',
    status: true // debe ser true o false dependiendo si esta entregado o no
  }
];

export const arrayFakeShoppingCar = [
  {
    id: 12345,
    img: 'https://edgehelmets.com/cdn/shop/files/CAPITAN_AMERICA_ZOOM.jpg?v=1687202275',
    title: 'Casco Integral Hro518 Cremer...',
    price: 11.11
  }
];
