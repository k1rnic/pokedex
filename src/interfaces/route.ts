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
  component: (props?: any) => JSX.Element;
  showInNav: boolean;
}
