import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import theme from '../config/theme'
import Logo from '../utils/image'

const config = require('../config/website')

export default function Header() {
  const wrapperStyles = css`
    background: ${theme.success};
    display: flex;
    justify-content: center;
    padding: 20px;
    position: relative;
    z-index: 100;
  `

  const groupStyles = css`
    align-items: center;
    display: flex;
    width: 1440px;
  `

  const navStyles = css`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    z-index: 100;
    a {
      align-items: center;
      border-radius: 2px;
      color: ${theme.background};
      cursor: pointer;
      display: flex;
      justify-content: center;
      white-space: nowrap;
      font-size: 16px;
      margin-left: 20px;
      opacity: 0.8;
      padding: 6px;
      line-height: 20px;
      border-radius: 4px;
      transition: all 0.15s ease;
      font-weight: 600;
    }
    a:hover {
      opacity: 1;
      background: #ffffff38;
    }
    @media (max-width: 520px) {
      a:nth-of-type(1) {
        display: none;
      }
    }
  `

  const logoStyles = css`
    align-items: center;
    display: flex;
    span {
      color: ${theme.background};
      padding-left: 10px;
      font-size: 22px;
      font-weight: 700;
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <Link to="/" css={logoStyles}>
          <Logo />
          <span>Lauro Silva</span>
        </Link>
        <div css={navStyles}>
          <a href="https://twitter.com/laurosilvacom" rel="me">
            @laurosilvacom
          </a>

          <Link to="/search">Search</Link>
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </div>
    </div>
  )
}
