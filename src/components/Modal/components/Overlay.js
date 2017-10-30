// @flow

import React from 'react'
import type { Element } from 'react'
import styled, { keyframes } from 'styled-components'
import Portal from 'react-portal'

export type OverlayProps = {
  isOpened: boolean;
  onClose: Function;
  overlayClosable?: boolean;
}

type Props = OverlayProps & {
  children: Element<*>;
}

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.85);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${fade};
  animation-duration: 0.35s;
  cursor: pointer;
  ${({ overlayClosable }) => !overlayClosable && `
    pointer-events: none;
  `}
`

export default (props: Props) => (
  <Portal isOpened={props.isOpened}>
    <Overlay
      onClick={props.onClose}
      overlayClosable={props.overlayClosable}
    >
      {props.children}
    </Overlay>
  </Portal>
)
