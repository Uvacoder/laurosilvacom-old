import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import theme from '../config/theme'
import Logo from '../images/logo.png'

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
    width: 1220px;
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
    }
    a:hover {
      opacity: 1;
    }
    @media (max-width: 500px) {
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
      font-weight: 600;
    }
    img {
      border-radius: 50%;
      width: 70px;
    }
    @media (max-width: 500px) {
      img {
        width: 60px;
      }
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <Link to="/" css={logoStyles}>
          <img alt={config.siteTitle} src={Logo} />
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
