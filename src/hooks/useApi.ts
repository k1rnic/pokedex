import { useEffect, useState } from 'react';
import { ApiRoutes } from '../config/api';
import request from '../utils/request';
import { UrlOptions } from '../utils/url';

const useApi = <T, Route extends keyof ApiRoutes>(endpoint: Route, urlOptions: UrlOptions<Route>) => {
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await request<T, Route>(endpoint, urlOptions);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlOptions]);

  return { data, isLoading, isError };
};

export default useApi;
