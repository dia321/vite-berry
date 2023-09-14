import axios, { AxiosInstance, AxiosResponse } from 'axios';
import JSONbig from 'json-bigint';

const BASE_URL = '';

const apiInstance = (url: string, options?: { [key: string]: string }): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
    ...options,
    transformResponse: [(data) => JSONbig.parse(data)]
  });
  return instance;
};

const API = apiInstance(BASE_URL);

export { API };
export type { AxiosResponse };
