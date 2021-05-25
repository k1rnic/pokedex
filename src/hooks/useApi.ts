import { useEffect, useState } from 'react';
import { ApiEndpoint } from '../config';
import req from '../utils/req';

const useApi = <T>(endpoint: ApiEndpoint, query?: Record<string, string | number>) => {
  const [data, setData] = useState<T>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      req<T>(endpoint, query).then(setData);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, query]);

  return { data, isLoading, isError };
};

export default useApi;
