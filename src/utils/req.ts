import Url from 'url';
import { ApiEndpoint } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export default async <T>(endpoint: ApiEndpoint, query?: Record<string, string | number>) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const data: T = await fetch(uri).then((res) => res.json());

  return data;
};
