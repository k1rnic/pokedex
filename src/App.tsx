import { useRoutes } from 'hookrouter';
import React from 'react';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import routes from './routes';

export default () => {
  const RoutedView = useRoutes(routes);

  return RoutedView ? (
    <>
      <Header />
      {RoutedView}
    </>
  ) : (
    <NotFound />
  );
};
