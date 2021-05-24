import config, { ApiEndpoint } from '../config';

export default (endpoint: ApiEndpoint) => ({
  ...config.client.server,
  ...config.client.endpoint[endpoint].uri,
});
