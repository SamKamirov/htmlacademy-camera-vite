import { TOKEN_NAME } from '../const';

export const setToken = (token: string) =>
  localStorage.setItem(TOKEN_NAME, token);

export const getToken = () => localStorage.getItem(TOKEN_NAME);

export const dropToken = () => localStorage.removeItem(TOKEN_NAME);
