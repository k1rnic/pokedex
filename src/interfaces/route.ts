import { PropsWithChildren } from 'react';

export enum AppRoute {
  Home = '/',
  Pokedex = '/pokedex',
  PokemonDetails = '/pokedex/:id',
  Legendaries = '/legendaries',
  Docs = '/documentation',
}

export interface IRoute {
  label?: string;
  route: AppRoute;
  component: (props?: PropsWithChildren<any>) => JSX.Element;
  showInNav: boolean;
}
