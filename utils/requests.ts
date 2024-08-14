import { apiClient } from './api';
import { ApiRequests } from './enums';

export const getRequest = (URL: ApiRequests | string) => {
  return apiClient.get(`/${URL}`);
};

export const postRequest = <T>(URL: ApiRequests, payload: T) => {
  return apiClient.post(`/${URL}`, payload);
};

export const patchRequest = <T>(URL: ApiRequests, payload: T) => {
  return apiClient.patch(`/${URL}`, payload);
};

export const deleteRequest = (URL: ApiRequests) => {
  return apiClient.delete(`/${URL}`);
};
