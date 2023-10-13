import styled from 'styled-components';
import styles from './SideMenu.module.scss';
import HomeIcon from '../assets/home-icon.svg?react';

const SideMenuArea = styled.div``;
const MenuContainer = styled.div``;
const IconContainer = styled.div``;

const SideMenu = () => {
  return (
    <SideMenuArea className={styles['side-menu']}>
      {[1, 2].map((_) => (
        <MenuContainer className={styles['menu-container']} key={_}>
          <IconContainer className={styles['icon-container']}>
            <HomeIcon />
          </IconContainer>
          <div>홈</div>
        </MenuContainer>
      ))}
    </SideMenuArea>
  );
};

export default SideMenu;
