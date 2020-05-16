import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const wrapperStyles = css`
  max-width: 720px;
  margin: auto;
  text-align: center;
  padding: 100px 20px;
  input {
    max-width: 720px;
  }
  h1 {
    font-size: 40px;
    margin: 0 auto;
    color: ${theme.foreground};
  }
  p {
    font-size: 22px;
    margin-top: 17px;
    line-height: 1.4;
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
  }
  @media (max-width: 620px) {
    h1 {
      font-size: 30px;
    }
  }
`

export default function Wrapper({children}) {
  return <div css={wrapperStyles}>{children}</div>
}
