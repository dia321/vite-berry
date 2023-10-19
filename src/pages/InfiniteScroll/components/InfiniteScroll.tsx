import { useEffect, useState } from 'react';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useGetDogWithPage } from '../hooks/useGetDogWithPage';
import DownArrowIcon from '../../../assets/down-arrow-icon.svg?react';
import s from '../styles/InfiniteScroll.module.scss';
import styled from 'styled-components';

interface UseIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

const Container = styled.div``;
const ScrollAreaContainer = styled.div``;
const ScrollArea = styled.div``;
const Indicator = styled.div``;

const useIntersectionObserver = ({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage
}: UseIntersectionObserverProps) => {
  //관찰할 요소입니다. 스크롤 최하단 div요소에 setTarget을 ref로 넣어 사용할 것입니다.
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      //target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

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

  return { setTarget };
};

const InfiniteScroll = () => {
  const { data, fetchNextPage, hasNextPage } = useGetDogWithPage();
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage
  });
  console.log(data);

  return (
    <Container className={s['container']}>
      <ScrollAreaContainer className={s['scroll-area-container']}>
        <Indicator className={s['indicator']}>
          <div>아래로 스크롤</div>
          <span className={s['down-icon-container']}>
            <DownArrowIcon />
          </span>
        </Indicator>
        <ScrollArea className={s['scroll-area']}>
          <div className={s['dummy-space']}></div>
          {data?.pages.map((p, i) => (
            <div key={`__${i}`}>
              <img src={p.message} />
            </div>
          ))}
          <div ref={setTarget} className="h-[1rem]" />
        </ScrollArea>
      </ScrollAreaContainer>
    </Container>
  );
};

export default InfiniteScroll;
