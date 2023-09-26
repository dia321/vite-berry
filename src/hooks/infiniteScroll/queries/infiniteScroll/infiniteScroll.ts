import { QueryKey, UseInfiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { fetchNextPages } from '@api/api';
// interface InfiniteQueryOptions {
//   getNextPageParam: () => void;
//   getPreviousPageParam: () => void;
// }

export const infiniteScroll = ({
  queryKey,
  options
}: {
  queryKey: QueryKey;
  options?: UseInfiniteQueryOptions;
}) => useInfiniteQuery(queryKey, fetchNextPages, { ...options });
