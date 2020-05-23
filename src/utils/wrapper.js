import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

const wrapperStyles = css`
  max-width: 780px;
  margin: auto;
  padding: 80px 20px;
  input {
    max-width: 780px;
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
    margin: auto;
    margin-top: 20px;
    color: ${theme.accents3};
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
