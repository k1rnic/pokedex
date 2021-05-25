import config, { ApiEndpoint } from '../config';

export default (endpoint: ApiEndpoint, query?: Record<string, string | number>) => ({
  ...config.client.server,
  ...config.client.endpoint[endpoint].uri,
  query,
});
