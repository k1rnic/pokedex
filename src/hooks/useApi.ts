import { useEffect, useState } from 'react';
import { ApiEndpoint } from '../config';
import req from '../utils/req';

const useApi = <T>(endpoint: ApiEndpoint) => {
  const [data, setData] = useState<T>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      req<T>(endpoint).then(setData);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  return { data, isLoading, isError };
};

export default useApi;
