import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

const { NA_HORA } = endpoints;

const get = (config?: AxiosRequestConfig): Promise<AxiosResponse<INaHora>> => api.get(`${NA_HORA}`, config);

const getByCategory = (category: string | number, config?: AxiosRequestConfig): Promise<AxiosResponse<INaHora>> =>
  api.get(`${NA_HORA}/${category}`, config);

const getForTicker = (config?: AxiosRequestConfig): Promise<AxiosResponse<INaHora>> =>
  api.get(`${NA_HORA}/ticker`, config);

export const naHoraService = {
  get,
  getByCategory,
  getForTicker,
};
