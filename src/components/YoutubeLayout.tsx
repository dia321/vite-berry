import styled from 'styled-components';
import YoutubeLogo from '../assets/youtube-logo.svg?react';
import BurgerMenu from '../assets/hamburger-menu.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import SpeackIcon from '../assets/speak-icon.svg?react';
import NewVideoIcon from '../assets/new-video-icon.svg?react';
import NotificationIcon from '../assets/notification-icon.svg?react';
import styles from './YoutubeLayout.module.scss';
import { useEffect, useRef, useState } from 'react';
import Tooltip from './Tooltip';

interface OnMouseOverProps {
  onMouseOver: React.MouseEventHandler;
}

const NavBar = styled.div`
  height: 56px;
`;
const Partition = styled.div``;
const BurgerContainer = styled.div``;
const SearchContainer = styled.div``;
const SearchInputContainer = styled.div``;
const SearchButtonContainer = styled.div<OnMouseOverProps>``;
const SpeakContainer = styled.div``;
const NewVidContainer = styled.div``;
const NotificationContainer = styled.div``;
const UserContainer = styled.div``;

export const YoutubeLayout = () => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleHover: React.MouseEventHandler = (e) => {};

  const handleClick = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      // 클릭 이벤트가 input 요소 외부에서 발생한 경우
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleClick);

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <NavBar className={styles['nav-bar']}>
        <Partition className={styles['partition']}>
          <BurgerContainer className={`${styles['burger-container']}`}>
            <BurgerMenu className={styles['burger-menu']} />
          </BurgerContainer>
          <div className="flex cursor-pointer">
            <YoutubeLogo />
            <span className={styles['korea']}>KR</span>
          </div>
        </Partition>
        <Partition className={styles['partition']}>
          <SearchContainer
            className={styles['search-container']}
            id="search"
            onClick={() => setFocused(true)}
          >
            <SearchInputContainer
              className={styles['search-input-container']}
              data-focused={focused}
            >
              <SearchIcon
                className={`${styles['search-icon']} ${styles['front']}`}
                data-focused={focused}
              />
              <div className="flex w-full justify-between">
                <input
                  className={styles['search-input']}
                  placeholder="검색"
                  type="text"
                  onFocus={() => setFocused(true)}
                  // onBlur={() => setFocused(false)}
                  ref={inputRef}
                />
                <a href="" className="p-1">
                  <img
                    className={styles['keyboard']}
                    src="//www.gstatic.com/inputtools/images/tia.png"
                  />
                </a>
              </div>
            </SearchInputContainer>
            <SearchButtonContainer
              className={styles['search-button-container']}
              onMouseOver={handleHover}
            >
              <SearchIcon
                className={`${styles['search-icon']} ${styles['back']}`}
                data-focused={focused}
              />
              <Tooltip content="검색" visible={true} />
            </SearchButtonContainer>
            <SpeakContainer>
              <div className={`${styles['speak-icon-container']}`}>
                <SpeackIcon />
              </div>
              <Tooltip content="음성으로 검색" visible={true} />
            </SpeakContainer>
          </SearchContainer>
        </Partition>
        <Partition className={`${styles['partition']} ${styles['shortcut-container']}`}>
          <NewVidContainer>
            <div className={styles['new-video-container']}>
              <NewVideoIcon />
            </div>
            <Tooltip content="만들기" visible={true} />
          </NewVidContainer>
          <NotificationContainer>
            <div className={styles['notification-container']}>
              <NotificationIcon />
            </div>
            <Tooltip content="알림" visible={true} />
          </NotificationContainer>
          <UserContainer className={styles['user-container']}>b</UserContainer>
        </Partition>
      </NavBar>
    </>
  );
};
