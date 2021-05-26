import Url from 'url';
import { ApiRoutes } from '../config/api';
import { createURL, UrlOptions } from './url';

export default async <T, Route extends keyof ApiRoutes>(endpoint: Route, urlOptions: UrlOptions<Route>) => {
  const uri = Url.format(createURL(endpoint, urlOptions));
  const data: T = await fetch(uri).then((res) => res.json());

  return data;
};
