import { useEffect, useState } from 'react';
import { ApiRouteParam, ApiRoutes } from '../config';
import req from '../utils/req';

const useApi = <T, Route extends keyof ApiRoutes>(
  endpoint: Route,
  query?: Record<string, string | number>,
  params?: ApiRouteParam<Route>,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await req<T, Route>(endpoint, query, params);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint, query, params]);

  return { data, isLoading, isError };
};

export default useApi;
