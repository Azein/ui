// @flow

import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  width: 880px;
  height: 300px;
  background: ${({ theme }) => theme.color.background};
  border-radius: 6px;
  margin: auto;
  cursor: default;
`

export default () => (
  <Modal />
)
