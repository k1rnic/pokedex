import apiConfig from '../config/api';
import { createURL } from './url';

describe('createURL', () => {
  test('should return object with protocol, host, pathname and empty query', () => {
    const {
      client: { server, endpoint },
    } = apiConfig;
    const url = createURL('getPokemons');

    expect(url).toEqual({
      method: 'GET',
      uri: { protocol: server.protocol, host: server.host, pathname: endpoint.getPokemons.uri.pathname, query: {} },
      body: {},
    });
  });

  test('should return object with protocol, host, pathname and query', () => {
    const {
      client: { server, endpoint },
    } = apiConfig;
    const url = createURL('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: server.protocol,
        host: server.host,
        pathname: endpoint.getPokemons.uri.pathname,
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('should return object with protocol, host, pathname with id param', () => {
    const {
      client: { server, endpoint },
    } = apiConfig;
    const url = createURL('getPokemonsById', { id: '1' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: server.protocol,
        host: server.host,
        pathname: endpoint.getPokemonsById.uri.pathname.replace(':id', '1'),
        query: {},
      },
      body: {},
    });
  });

  test('should return object with protocol, host, pathname with id param and body', () => {
    const {
      client: { server, endpoint },
    } = apiConfig;
    const url = createURL('updatePokemon', { id: '1', type: 'grass' });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: server.protocol,
        host: server.host,
        pathname: endpoint.updatePokemon.uri.pathname.replace(':id', '1'),
        query: {},
      },
      body: { type: 'grass' },
    });
  });
});
