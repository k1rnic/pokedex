import React from 'react';
import { AppRoute, IRoute } from './interfaces/route';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import { RouteParams } from './utils/url';

export const ROUTES: IRoute[] = [
  {
    route: AppRoute.Home,
    label: 'home',
    component: () => <Home />,
    showInNav: true,
  },
  {
    route: AppRoute.Pokedex,
    label: 'pokédex',
    component: () => <Pokedex />,
    showInNav: true,
  },
  {
    route: AppRoute.PokemonDetails,
    component: ({ id }: RouteParams<AppRoute.PokemonDetails>) => <PokemonDetails id={id} />,
    showInNav: false,
  },
];

const Routes = ROUTES.reduce(
  (acc, { route, component: Route }) => ({
    ...acc,
    [route]: Route,
  }),
  {},
);

export default Routes;
