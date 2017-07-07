import React from 'react'
import styled from 'styled-components'

import { borderExtraLarge } from '../../utils/borders'
import Icon from '../../components/icons'

import {
  getTextColor,
} from './utils'

import visa from './assets/visa.svg'
import mastercard from './assets/mastercard.svg'
import maestro from './assets/maestro.svg'
import electron from './assets/electron.svg'

const PAYMENT_SYSTEM_LOGOS = {
  visa,
  mastercard,
  maestro,
  electron,
}

function getPaymentSystemLogo(system: string) {
  const url = PAYMENT_SYSTEM_LOGOS[system]
  return url ? `url('${url}')` : null
}

const CARD_HEIGHT = 264 // 5398
const CARD_WIDTH = 420 // 8560
const STRIPE_HEIGHT = CARD_HEIGHT / 5
const X_PADDING = CARD_WIDTH / 10
const Y_PADDING = CARD_HEIGHT / 11

export const Root = styled.div`
  display: flex;
  color: ${({ color }) => getTextColor(color)};
`

export const Card = styled.div`
  background-color: ${({ color }) => color};
  border: 1px solid rgba(0, 0, 0, 0.12);
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  padding-left: ${X_PADDING}px;
  padding-right: ${X_PADDING}px;
  padding-top: ${Y_PADDING}px;
  padding-bottom: ${Y_PADDING};
  ${borderExtraLarge};
`

export const Front = styled(Card)`
  position: relative;
  z-index: 1;
`

export const Back = styled(Card)`
  position: relative;
  z-index: 0;
  margin-left: ${-CARD_WIDTH / 2}px;
  margin-top: ${CARD_HEIGHT / 22}px;
  &::before {
    display: block;
    background-color: rgba(0, 0, 0, 0.12);
    content: '';
    width: 100%;
    height: ${STRIPE_HEIGHT}px;
    margin-left: ${X_PADDING}px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.div`

`

export const BackContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 20px;
`

export const FrontFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaymentSystemLogo = styled.div`
  width: 72px;
  height: 42px;
  background-repeat: no-repeat;
  ${({ paymentSystem }) => {
    const logo = getPaymentSystemLogo(paymentSystem)
    return logo && `
      background-color: #fff;
      background-image: ${logo};
    `
  }};
`

export const BankName = styled.div`
  font-size: 20px;
  font-weight: 600;
`

export const SafePayment = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  margin-top: 16px;
`

export const SafePaymentText = styled.div`
  width: 60px;
  line-height: 1.5;
`

export const LockRoot = styled(Icon)`
  fill: #fff;
  opacity: 0.8;
`

export const Lock = (props) => (
  <LockRoot
    {...props}
    name="lock"
    size="large"
  />
)
