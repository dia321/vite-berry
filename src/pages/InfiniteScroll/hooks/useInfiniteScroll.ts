import { infiniteScroll } from '@hooks/infiniteScroll/queries/infiniteScroll/infiniteScroll';

// 페이지마다 필요한 옵션 넣어줌
export const useInfiniteScroll = () => {
  return infiniteScroll({
    queryKey: ['infiniteScroll'],
    options: {
      // getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
      // getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor
    }
  });
};
