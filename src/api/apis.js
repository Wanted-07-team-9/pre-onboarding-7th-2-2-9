import { instance } from './axiosInstance';

export const apis = {
  getAdList: () => {
    return instance.get('/wanted_FE_ad-list-data-set.json');
  },
  getDashAdList: () => {
    return instance.get('/wanted_FE_trend-data-set.json');
  },
};
