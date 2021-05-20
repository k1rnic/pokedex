import React from 'react';
import { AppRoute, IRoute } from './interfaces/route';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

export const NAV_MENU: IRoute[] = [
  { route: AppRoute.Home, label: 'home', component: () => <Home /> },
  { route: AppRoute.Pokedex, label: 'pokédex', component: () => <Pokedex /> },
  // { route: AppRoute.Legendaries, label: 'legendaries' },
  // { route: AppRoute.Docs, label: 'documentation' },
];

const Routes = NAV_MENU.reduce(
  (acc, { route, component: Route }) => ({
    ...acc,
    [route]: Route,
  }),
  {},
);

export default Routes;
