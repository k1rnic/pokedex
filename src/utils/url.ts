/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { UrlObject } from 'url';
import config, { ApiRouteParam, ApiRoutes } from '../config/api';

export type RouteParams<T> = T extends `${infer _}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof RouteParams<Rest>]: string }
  : T extends `${infer _}:${infer Param}`
  ? { [k in Param]: string }
  : {};

export type UrlOptions<Route extends keyof ApiRoutes> = {
  query?: Record<string, string | number>;
  params?: ApiRouteParam<Route>;
};

export const createURL = <Route extends keyof ApiRoutes>(
  route: Route,
  { query, params }: UrlOptions<Route> = {},
): UrlObject => {
  const {
    client: { server, endpoint },
  } = config;
  const { pathname } = endpoint[route].uri;

  const uriWithParams = Object.entries(params || {}).reduce(
    (acc, [k, v]) => acc.replace(`:${k}`, v),
    pathname as string,
  );

  const notEmptyQuery = Object.entries(query || {})
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

  return {
    ...server,
    pathname: uriWithParams,
    query: notEmptyQuery,
  };
};
