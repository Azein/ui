import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { text } from '@kadira/storybook-addon-knobs'
import updateKnob from '../../utils/updateKnob'

import AirportInput from '../airport-input'
import Button from '../button'
import ControlsGroup from './index'

storiesOf('ControlsGroup', module)
  .addWithInfo('Inputs group', () => (
    <ControlsGroup onSwap={action('Swap it!')}>
      <AirportInput readOnly value="Шереметьево" city="Москва" IATACode="SVO" />
      <AirportInput
        value={text('value', 'Несуществующий город')}
        onChange={({ target }) => updateKnob('value', 'text', target.value)}
      />
    </ControlsGroup>
  ))
  .addWithInfo('Different controls group', () => (
    <ControlsGroup>
      <Button size="large">
        Пойти
      </Button>
      <AirportInput readOnly value="Шереметьево" city="Москва" IATACode="SVO" />
      <Button size="large">
        Найти
      </Button>
    </ControlsGroup>
  ))