import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

const getBySlug = (slug: string, config?: AxiosRequestConfig): Promise<AxiosResponse<INews[]>> =>
  api.get(`${endpoints.NEWS}/${slug}`, config);

export const newsService = {
  getBySlug,
};
