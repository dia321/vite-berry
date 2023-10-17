import { API } from './instance';

export const getRandomDogAPI = () =>
  API.request({
    method: 'get',
    url: '/api/breeds/image/random'
  });

export const fetchNextPages = async ({ pageParam = 0 }) => {
  const sto = new Promise((resolve) => {
    setTimeout(async () => {
      resolve(pageParam + 5);
    }, 5000);
  });
  return sto;
};
