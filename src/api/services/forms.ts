import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from 'src/api';
import { endpoints } from 'src/api/endpoints';

interface IResponse {
  status?: string;
  message?: string;
}

const contactUs = (data: IContactUs, config?: AxiosRequestConfig): Promise<AxiosResponse<IResponse>> =>
  api.post(`${endpoints.FORM}/contact-us`, data, config);

const reporterIsYou = (data: IReporterIsYou, config?: AxiosRequestConfig): Promise<AxiosResponse<IResponse>> =>
  api.post(`${endpoints.FORM}/reporter-is-you`, data, config);

const workWithUs = (data: IWorkWithUs, config?: AxiosRequestConfig): Promise<AxiosResponse<IResponse>> =>
  api.post(`${endpoints.FORM}/work-with-us`, data, config);

export const formsService = {
  contactUs,
  reporterIsYou,
  workWithUs,
};
