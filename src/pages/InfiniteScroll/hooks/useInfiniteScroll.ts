import { infiniteScroll } from '@hooks/infiniteScroll/queries/infiniteScroll/infiniteScroll';

// 페이지마다 필요한 옵션 넣어줌
export const useInfiniteScroll = () => {
  return infiniteScroll({
    queryKey: ['infiniteScroll'],
    options: {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.data.length === 0 ? undefined : nextPage;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data),
        pageParams: data.pageParams
      })
    }
  });
};
