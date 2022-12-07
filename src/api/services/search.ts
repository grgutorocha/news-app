import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

const { SEARCH } = endpoints;

const get = (config?: AxiosRequestConfig): Promise<AxiosResponse<INaHora>> => api.get(`${SEARCH}`, config);

export const searchService = {
  get,
};
