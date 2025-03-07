import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { SERVER_URL, TOKEN_NAME } from '../const';
import { getToken } from '../services/token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: 5000,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers[TOKEN_NAME] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error) {
        console.log(error);
      }
    },
  );

  return api;
};
