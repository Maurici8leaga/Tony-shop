import { useRoutes } from 'react-router-dom';
import Landing from '@atoms/landing/Landing';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Landing />
    }
  ]);

  return elements;
};
