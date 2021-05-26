import { UrlObject } from 'url';
import config, { ApiRouteParam, ApiRoutes } from '../config';

const getUrlWithParamsConfig = <Route extends keyof ApiRoutes>(
  route: Route,
  query?: Record<string, string | number>,
  params?: ApiRouteParam<Route>,
): UrlObject => {
  const {
    client: { server, endpoint },
  } = config;
  const { pathname } = endpoint[route].uri;
  const uriWithParams = Object.keys(params || {})?.length
    ? Object.entries(params || {}).reduce((acc, [k, v]) => acc.replace(`:${k}`, v), pathname as string)
    : pathname;

  return {
    ...server,
    ...endpoint[route].uri,
    pathname: uriWithParams,
    query,
  };
};

export default getUrlWithParamsConfig;
