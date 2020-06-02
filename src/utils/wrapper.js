import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const wrapperStyles = css`
  max-width: 780px;
  margin: auto;
  padding: 50px 20px;
  input {
    max-width: 780px;
  }
`

export default function Wrapper({children}) {
  return <div css={wrapperStyles}>{children}</div>
}
