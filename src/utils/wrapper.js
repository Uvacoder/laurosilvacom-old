import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const gridStyles = css`
  background: ${theme.foreground};
`

const wrapperStyles = css`
  max-width: 720px;
  margin: auto;
  padding: 20px;
  text-align: center;
`

export default function Wrapper({children}) {
  return (
    <div css={gridStyles}>
      <div css={wrapperStyles}>{children}</div>
    </div>
  )
}
