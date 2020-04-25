import React from 'react'
import {css} from '@emotion/core'
import theme from '../config/theme'

export default function Footer() {
  const wrapperStyles = css`
    padding: 40px 0;
    background: ${theme.foreground};
    border-top: 1px solid ${theme.accents7};
  `

  const groupStyles = css`
    max-width: 720px;
    margin: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: auto;
    align-items: center;
    a {
      color: ${theme.accents3};
    }
    a:hover {
      color: ${theme.accents1};
      text-decoration: none;
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <a href="https://twitter.com/laurosilvacom" rel="me">
          Newsletter
        </a>
        <a href="mailto:hey@laurosilva.com" rel="me">
          hey@laurosilva.com
        </a>
        <a href="https://twitter.com/laurosilvacom" rel="me">
          Twitter
        </a>
        <a href="https://github.com/laurosilvacom" rel="me">
          Github
        </a>
      </div>
    </div>
  )
}
