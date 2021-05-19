import { ReactNode } from 'react';

export enum AppRoute {
  Home = '/',
  Pokedex = '/pokedex',
  Legendaries = '/legendaries',
  Docs = '/documentation',
}

export interface IRoute {
  label: string;
  route: AppRoute;
  component: ReactNode;
}
