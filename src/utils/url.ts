/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ReactText } from 'react';
import config, { ApiRouteParam, ApiRoutes } from '../config/api';

export type RouteParams<T> = T extends `${infer _}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof RouteParams<Rest>]: ReactText }
  : T extends `${infer _}:${infer Param}`
  ? { [k in Param]: ReactText }
  : {};

export type UriOptions<Route extends keyof ApiRoutes> = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  pathname: string;
  query?: ApiRouteParam<Route> | Record<string, ReactText>;
};

export const createURL = <Route extends keyof ApiRoutes>(route: Route, options: UriOptions<Route>['query'] = {}) => {
  const {
    client: { server, endpoint },
  } = config;
  const { method, uri } = endpoint[route];
  const query = {
    ...options,
  };

  const pathname = Object.entries(options).reduce((acc, [k, v]) => {
    if (acc.indexOf(`:${k}`) >= 0) {
      delete query[k as keyof typeof query];
      return acc.replace(`:${k}`, v as string);
    }
    return acc;
  }, uri.pathname as string);

  return {
    method,
    uri: { ...server, pathname, query: method === 'GET' ? query : {} },
    body: method !== 'GET' ? query : {},
  };
};
