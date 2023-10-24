import { useRoutes } from 'react-router-dom';
import Landing from '@atoms/landing/Landing';
import Register from '@atoms/auth/register/Register';
import Login from '@atoms/auth/login/Login';
import ProductsList from '@atoms/productsList/ProductsList';
import MotorCycleMenu from '@atoms/menu-Category/MotorCycleMenu';
import Product from '@atoms/product-description/Product';
import Profile from '@atoms/profile/Profile';
import MyAddresses from '@atoms/addresses/MyAddresses';
import MyShopping from '@atoms/shopping/MyShopping';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/list-of-products/:id',
      element: <ProductsList />
    },
    {
      path: 'category-menu/motorcycle', // oOJO AQUI ESTO HAY QUE REVISAR
      element: <MotorCycleMenu />
    },
    {
      path: 'product/:idProduct', // oOJO AQUI ESTO HAY QUE REVISAR
      element: <Product />
    },
    {
      path: '/account',
      children: [
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'myAddresses',
          element: <MyAddresses />
        },
        {
          path: 'myShopping',
          element: <MyShopping />
        }
      ]
    }
  ]);

  return elements;
};
