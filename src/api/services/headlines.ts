import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

export interface INews {
  not_id: string | number;
  not_tit: string;
  not_tit_editoria: string;
  not_tit_materia: string;
  not_res: string;
  imagem: string;
}

export interface IEditoria {
  not_id: string | number;
  not_tit: string;
  not_tit_editoria: string;
  not_tit_materia: string;
  not_res: string;
  imagem: string;
}

export interface INaHoraItem {
  not_id: string | number;
  not_tit: string;
  not_tit_editoria: string;
  not_tit_materia: string;
  not_res: string;
  not_data: string;
  not_hora: string;
  imagem: string;
  imagem2: string;
}

export interface INaHora {
  title: string;
  slug: string;
  list: INaHoraItem[];
}

interface IEditoriaResponse {
  pageTitle: string;
  pageDescription: string;
  pageSlug: string;
  level01: IEditoria[];
  level02: IEditoria[];
  level03: IEditoria[];
  level04: IEditoria[];
  level05: IEditoria[];
  headlinesIds?: number[];
}

interface IHomeResponse {
  level01: INews[];
  level02: INews[];
  level03: INews[];
  level04: INews[];
  level05: INews[];
  level06: INews[];
  naHora: INaHoraItem[];
  level08: INews[];
  level10: INews[];
  level11: INews[];
}

const getEditorial = (slug: string | number, config?: AxiosRequestConfig): Promise<AxiosResponse<IEditoriaResponse>> =>
  api.get(`${endpoints.HEADLINES}/${slug}`, config);

const getHome = (config?: AxiosRequestConfig): Promise<AxiosResponse<IHomeResponse>> =>
  api.get(`${endpoints.HEADLINES}/home`, config);

export const headlinesService = {
  getEditorial,
  getHome,
};
