import { useQuery, QueryKey } from '@tanstack/react-query';
import { getRandomDogAPI } from '@api/api';

interface QueryOptions {
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
  onSuccess?: ({ data }) => void;
}

// 베이스쿼리
// useQuery({queryKey: 쿼리키, queryFn: 호출하는 함수, options: 옵션들})
export const getRandomDog = ({
  queryKey,
  options
}: {
  queryKey: QueryKey;
  options?: QueryOptions;
}) => useQuery(queryKey, getRandomDogAPI, { ...options });
