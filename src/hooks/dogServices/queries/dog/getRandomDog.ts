import { useQuery } from '@tanstack/react-query';
import { getRandomDogAPI } from '@api/api';

// useQuery({queryKey: 쿼리키, queryFn: 호출하는 함수, options: 옵션들})
export const getRandomDog = ({ storeCode, options }) =>
  useQuery(['key', storeCode], getRandomDogAPI, { ...options });
