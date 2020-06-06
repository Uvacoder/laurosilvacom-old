import React from 'react'
import {css} from '@emotion/core'

const wrapperStyles = css`
  max-width: 720px;
  margin: auto;
  padding: 50px 20px;
  input {
    max-width: 720px;
  }
`

export default function Wrapper({children}) {
  return <div css={wrapperStyles}>{children}</div>
}
