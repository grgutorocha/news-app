import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

const { BOX } = endpoints;

interface INewsResponse {
  not_id: number;
  not_tit: string;
  not_res: string;
  not_data: string;
  not_hora: string;
  imagem: string;
  imagem2: string;
}

export type IGetNaHoraResponse = INewsResponse[];
export type IGetTrendingTopicsResponse = INewsResponse[];

const getNahora = (config?: AxiosRequestConfig): Promise<AxiosResponse<IGetNaHoraResponse>> =>
  api.get(`${BOX}/na-hora`, config);

const getTrendingTopics = (config?: AxiosRequestConfig): Promise<AxiosResponse<IGetTrendingTopicsResponse>> =>
  api.get(`${BOX}/trending-topics`, config);

export const boxService = {
  getNahora,
  getTrendingTopics,
};
