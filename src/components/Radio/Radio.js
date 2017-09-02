// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { RadioLabel, StyledRadio, LabelText, RadioInput } from './styled'

export type Value = string | boolean | number;

type Props = {
  value: Value;
  label: string;
  disabled?: boolean;
  className?: string;
}

type Context = {
  selectedValue: Value;
  onChange: Function;
}

const Radio = (props: Props, context: Context) => {
  const { value, label, disabled, className } = props
  const { selectedValue, onChange } = context
  const checked = value === selectedValue

  return (
    <RadioLabel disabled={disabled} className={className}>
      <StyledRadio
        disabled={disabled}
        checked={checked}
      />
      <RadioInput
        {...props}
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <LabelText disabled={disabled}>
        {label}
      </LabelText>
    </RadioLabel>
  )
}

Radio.contextTypes = {
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func.isRequired,
}

Radio.defaultProps = {
  disabled: false,
  className: '',
}

export default Radio