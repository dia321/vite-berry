import { API } from './instance';

export const getRandomDogAPI = () =>
  API.request({
    method: 'get',
    url: '/api/breeds/image/random'
  });
