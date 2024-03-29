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
import FavoriteList from '@atoms/favorite-list/FavoriteList';
import Checkout from '@atoms/checkout/Checkout';

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
      path: 'category-menu/motorcycle',
      element: <MotorCycleMenu />
    },
    {
      path: 'product/:idProduct',
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
        },
        {
          path: 'favorites',
          element: <FavoriteList />
        }
      ]
    },
    {
      path: '/checkout',
      element: <Checkout />
    }
  ]);

  return elements;
};
