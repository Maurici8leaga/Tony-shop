import { useRoutes } from 'react-router-dom';
import Landing from '@atoms/landing/Landing';
import Register from '@atoms/auth/register/Register';
import Login from '@atoms/auth/login/Login';

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
    }
  ]);

  return elements;
};
