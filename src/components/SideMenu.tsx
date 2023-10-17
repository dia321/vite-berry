import styled from 'styled-components';
import styles from './SideMenu.module.scss';
import HomeIcon from '../assets/home-icon.svg?react';
import ShortsIcon from '../assets/shorts-icon.svg?react';
import SubscribeIcon from '../assets/subscribe-icon.svg?react';
import { useState } from 'react';

const SideMenuArea = styled.div``;
const MenuContainer = styled.div``;
const IconContainer = styled.div``;

const SideMenu = () => {
  const menuList = ['home', 'shorts', 'subscribe'];
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    menuList.reduce(
      (accumulator, value, index) => ({ ...accumulator, [value]: index ? false : true }),
      {}
    )
  );
  const handleClick = (idx: number) => {
    setSelected(
      menuList.reduce(
        (accumulator, value, index) => ({ ...accumulator, [value]: index === idx ? true : false }),
        {}
      )
    );
  };
  return (
    <SideMenuArea className={styles['side-menu']}>
      {['home', 'shorts', 'subscribe'].map((_, index) => (
        <MenuContainer
          className={styles['menu-container']}
          key={_}
          data-selected={selected[_]}
          onClick={() => handleClick(index)}
        >
          <IconContainer className={styles['icon-container']}>
            {_ === 'home' ? <HomeIcon /> : _ === 'shorts' ? <ShortsIcon /> : <SubscribeIcon />}
          </IconContainer>
          <div>{_ === 'home' ? '홈' : _ === 'shorts' ? 'Shorts' : '구독'}</div>
        </MenuContainer>
      ))}
    </SideMenuArea>
  );
};

export default SideMenu;
