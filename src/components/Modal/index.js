// @flow

import React from 'react'
import type { OverlayProps } from './components/Overlay'
import Overlay from './components/Overlay'
import Modal from './components/Modal'

type Props = OverlayProps

export default (props: Props) => (
  <Overlay
    isOpened={props.isOpened}
    onClose={props.onClose}
    overlayClosable={props.overlayClosable}
  >
    <Modal />
  </Overlay>
)
