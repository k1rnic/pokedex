import { useEffect, useState } from 'react';
import config from '../config';

type ApiEndpoint = keyof typeof config['endpoints'];

const useApi = <T>(endpoint: ApiEndpoint) => {
  const url = `${config.apiUrl}/${config.endpoints[endpoint]}`;

  const [data, setData] = useState<T>({} as T);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then(setData);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, isError };
};

export default useApi;
