import config, { ApiEndpoint } from '../config';

export default (endpoint: ApiEndpoint, query?: any) => ({
  ...config.client.server,
  ...config.client.endpoint[endpoint].uri,
  query,
});
