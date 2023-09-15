import { getRandomDog } from '@hooks/dogServices/queries/dog';

export const useGetRandomDog = (storeCode?) =>
  getRandomDog({
    storeCode,
    options: {
      staleTime: 10000,
      cacheTime: 5000
    }
  });
