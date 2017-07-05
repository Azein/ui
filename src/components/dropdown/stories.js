import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from '../../utils/updateKnob'
import { Dropdown, Button, DropdownOverlay } from '../../index'

const StyledDropdown = styled(Dropdown)`
  ${DropdownOverlay} {
    left: auto;
    width: 300px;
  }
`

storiesOf('Dropdown', module)
  .addWithInfo('Defalut', () => {
    const isOpen = boolean('isOpen', false)
    const onToggle = (event, value) => {
      event.preventDefault()
      updateKnob('isOpen', 'boolean', value)
    }

    return (
      <StyledDropdown
        overlay={<div><h2>Tethered</h2></div>}
        onToggle={onToggle}
        isOpen={isOpen}
      >
        <div>
          click to open
          &nbsp;
          <Button>click</Button>
        </div>
      </StyledDropdown>
    )
  })
