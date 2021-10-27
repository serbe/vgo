export const devMode = 'development';

export const prodMode = 'production';

export const isDevMode = (): boolean => {
  return import.meta.env.DEV;
};

export const isProdMode = (): boolean => {
  return import.meta.env.PROD;
};

export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

export const BASE_URL = (import.meta.env.VITE_APP_JSONURL as string) || '/go/json';
export const LOGIN_URL = (import.meta.env.VITE_APP_LOGINURL as string) || '/go/login';
