import { RouteParams } from '../utils/route';

const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemons',
        },
      },
      getPokemonsById: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemons/:id',
        },
      },
    },
  },
} as const;

export default config;

export type ApiRoutes = typeof config.client.endpoint;
export type ApiRoutePath<K extends keyof ApiRoutes> = ApiRoutes[K]['uri']['pathname'];
export type ApiRouteParam<K extends keyof ApiRoutes> = RouteParams<ApiRoutePath<K>>;
