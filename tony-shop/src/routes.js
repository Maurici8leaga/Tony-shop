import { useRoutes } from 'react-router-dom';
import Landing from '@atoms/landing/Landing';
import Register from '@atoms/auth/Register';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);

  return elements;
};
