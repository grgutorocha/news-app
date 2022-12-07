import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

interface INews {
  title: string;
  url: string;
}

interface IGetResponse {
  list: INews[];
}

const getNews = (config?: AxiosRequestConfig): Promise<AxiosResponse<IGetResponse>> =>
  api.get(endpoints.TICKER, config);

export const tickerService = {
  getNews,
};
