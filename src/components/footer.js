import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

export default function Footer() {
  const wrapperStyles = css`
    padding: 40px 0;
    margin-top: 100px;
    background: ${theme.accents1};
    box-shadow: rgb(221, 221, 225) 0px 1px 0px inset;
  `

  const groupStyles = css`
    max-width: 780px;
    margin: auto;
    p {
      text-align: center;
      font-size: 15px;
      color: ${theme.accents3};
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <p>© Lauro Silva, LLC. All rights reserved.</p>
      </div>
    </div>
  )
}
