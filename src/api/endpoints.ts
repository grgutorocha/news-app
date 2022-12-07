export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_ENDPOINT = '';

export const endpoints = {
  BOX: '/box',
  FORM: '/form',
  HEADLINES: '/headlines',
  NA_HORA: '/na-hora',
  NEWS: '/news',
  SEARCH: '/search',
  TICKER: '/ticker',
};

export const mountUrl = (endpoint: string = ''): string => {
  return `${BASE_URL}${API_ENDPOINT}${endpoint}`;
};
