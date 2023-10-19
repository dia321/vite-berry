import { getDogWithPageAPI } from '@api/api';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetDogWithPage = () => {
  return useInfiniteQuery({
    queryKey: ['infiniteScroll'],
    queryFn: async ({ pageParam = 1 }) => getDogWithPageAPI(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage = (lastPage as { page: number; totalPage: number }).page + 1;
      return nextPage > (lastPage as { page: number; totalPage: number }).totalPage
        ? undefined
        : nextPage;
    },
    select: (data) => {
      return {
        pages: data?.pages.flatMap((p) => p.data),
        pageParams: data.pageParams
      };
    }
  });
};
