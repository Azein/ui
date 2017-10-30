// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'

import Modal from 'components/Modal'
import Button from 'components/Button'

const openModal = () => updateKnob('isOpened', 'boolean', true)

const closeModal = () => updateKnob('isOpened', 'boolean', false)

storiesOf('Controls/Modal', module)
  .addWithInfo('default', () => {
    const isOpened = boolean('isOpened', false)
    const overlayClosable = boolean('overlayClosable', false)

    return (
      <div>
        <Button onClick={openModal}>Открыть</Button>
        <Modal
          isOpened={isOpened}
          onClose={closeModal}
          overlayClosable={overlayClosable}
        />
      </div>
    )
  })
