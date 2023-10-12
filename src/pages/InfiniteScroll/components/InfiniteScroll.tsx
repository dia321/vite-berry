import { useEffect, useState } from 'react';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

interface UseIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

const line = [...Array(20)];

const InfiniteScroll = ({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage
}: UseIntersectionObserverProps) => {
  const [page] = useState(1);
  const [target] = useState<HTMLDivElement | null | undefined>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      //target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };
  const { data } = useInfiniteScroll();

  useEffect(() => {
    if (!target) return;

    //ointersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, {
      threshold
    });

    // 타겟 관찰 시작
    observer.observe(target);

    // 관찰 멈춤
    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);
  return (
    <>
      {line.map((_, idx) => (
        <div className="h-10 border" key={idx}>
          asdf
        </div>
      ))}
    </>
  );
};

export default InfiniteScroll;
