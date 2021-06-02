import Url from 'url';
import { ApiRoutes } from '../config/api';
import { createURL, UriOptions } from './url';

type RequestOptions = {
  method: string;
  body?: string;
};

export default async <T, Route extends keyof ApiRoutes>(endpoint: Route, uriOptions: UriOptions<Route>['query']) => {
  const { method, uri, body } = createURL(endpoint, uriOptions);

  const options: RequestOptions = { method };

  if (Object.keys(body).length) {
    options.body = JSON.stringify(body);
  }

  const data: T = await fetch(Url.format(uri), options).then((res) => res.json());

  return data;
};
