import styled, { css } from 'styled-components';
import styles from './Tooltip.module.scss';
import React from 'react';
interface TooltipProps {
  content: string;
  visible: boolean;
  top?: string;
  nowrap?: boolean;
}
const Tooltip = (props: TooltipProps) => {
  const { content, visible, nowrap = true, top = 60 } = props;
  const ToolTipContainer = styled.div`
    ${top &&
    css`
      top: ${top}px;
    `}
  `;
  // ${right &&
  // css`
  //   right: ${right}px;
  //   transform: translateX(-50%);
  // `}
  return (
    <>
      <ToolTipContainer
        className={`${styles['tooltip-container']} ${
          visible ? styles['fade-in'] : styles['fade-out']
        }`}
      >
        <p className={nowrap ? 'whitespace-nowrap' : ''}>{content}</p>
      </ToolTipContainer>
    </>
  );
};

export default Tooltip;
