import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import theme from '../config/theme'

const config = require('../config/website')

export default function Header() {
  const wrapperStyles = css`
    padding: 10px 0;
    background: ${theme.foreground};
    border-bottom: 1px solid ${theme.accents7};
  `

  const groupStyles = css`
    max-width: 1120px;
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
        <Link to="/">{config.siteTitle}</Link>
        <Link to="/blog">Tutorials</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/newsletter">Newsletter</Link>
      </div>
    </div>
  )
}
