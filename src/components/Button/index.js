import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton, StyledButtonText, IconWrap, SIZES } from './styled'

const BUTTON_SIZE_TO_ICON_MAP = {
  small: 'xxsmall',
  normal: 'normal',
  large: 'normal',
}

const cloneIconWithSize = (iconNode, size) => (
  React.cloneElement(iconNode, {
    size: iconNode.props.size || BUTTON_SIZE_TO_ICON_MAP[size],
  })
)

const Button = ({ children, variant, disabled, size, icon, leftIcon, rightIcon, ...props }) => (
  <StyledButton
    {...props}
    size={size}
    variant={variant}
    isIconOnly={Boolean(icon)}
    hasLeftIcon={Boolean(leftIcon)}
    hasRightIcon={Boolean(rightIcon)}
    disabled={disabled}
  >
    {
      leftIcon ? (
        <IconWrap size={size} left>
          { cloneIconWithSize(leftIcon, size) }
        </IconWrap>
      ) : (
        null
      )
    }

    {
      icon ? (
        <IconWrap size={size}>
          { cloneIconWithSize(icon, size) }
        </IconWrap>
      ) : (
        <StyledButtonText
          size={size}
          hasLeftIcon={Boolean(leftIcon)}
          hasRightIcon={Boolean(rightIcon)}
        >
          { children }
        </StyledButtonText>
      )
    }

    {
      rightIcon ? (
        <IconWrap size={size} right>
          { cloneIconWithSize(rightIcon, size) }
        </IconWrap>
      ) : (
        null
      )
    }
  </StyledButton>
)

Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
}

/* eslint-disable react/require-default-props */
Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
}


export default Button
