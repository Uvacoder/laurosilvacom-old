import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const gridStyles = css`
  background: ${theme.foreground};
  border-bottom: 1px solid ${theme.accents7};
`

const wrapperStyles = css`
  max-width: 920px;
  margin: auto;
  text-align: center;
  height: 400px;
  padding: 40px 0;
  h1 {
    font-size: 70px;
    font-weight: 700;
  }
  @media (max-width: 620px) {
    height: 300px;
    h1 {
      font-size: 40px;
    }
  }
`

export default function Wrapper({children}) {
  return (
    <div css={gridStyles}>
      <div css={wrapperStyles}>{children}</div>
    </div>
  )
}
