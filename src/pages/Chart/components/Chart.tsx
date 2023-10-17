import { YoutubeLayout } from '@component/.';
import s from '../styles/Chart.module.scss';
import styled from 'styled-components';
import { useState } from 'react';
import { Cube } from 'src/pages/Chart/modules/Cube';
import Tyranno from '../modules/Tyranno';

const Content = styled.div``;
const TabContainer = styled.div``;
const Chart = () => {
  const tabList = ['total', 'cube', 'tyranno'];
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    tabList.reduce(
      (accumulator, value, index) => ({ ...accumulator, [value]: index ? false : true }),
      {}
    )
  );
  const handleClick = (idx: number) =>
    setSelected(
      tabList.reduce(
        (accumulator, value, index) => ({ ...accumulator, [value]: idx === index ? true : false }),
        {}
      )
    );
  return (
    <div>
      <YoutubeLayout />
      <div className={s['content-wrapper']}>
        <TabContainer className={s['tab-container']}>
          {tabList.map((tab, index) => (
            <div
              className={s['tab-button']}
              data-selected={selected[tab]}
              key={`${tab}_`}
              onClick={() => handleClick(index)}
            >
              {tab === 'total'
                ? '전체'
                : tab === 'cube'
                ? 'Cube'
                : tab === 'tyranno'
                ? '티라노'
                : ''}
            </div>
          ))}
        </TabContainer>
        <Content className={s['content']}>
          {selected.total && (
            <>
              <Cube />
              <Tyranno />
            </>
          )}
          {!selected.total && selected.cube && <Cube />}
          {!selected.total && selected.tyranno && <Tyranno />}
        </Content>
      </div>
    </div>
  );
};

export default Chart;
