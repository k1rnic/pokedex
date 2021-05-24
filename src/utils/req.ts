import Url from 'url';
import { ApiEndpoint } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export default async <T>(endpoint: ApiEndpoint) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const data: T = await fetch(uri).then((res) => res.json());

  return data;
};
