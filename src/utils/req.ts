import Url from 'url';
import { ApiRouteParam, ApiRoutes } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export default async <T, Route extends keyof ApiRoutes>(
  endpoint: Route,
  query?: Record<string, string | number>,
  params?: ApiRouteParam<Route>,
) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query, params));
  const data: T = await fetch(uri).then((res) => res.json());

  return data;
};
