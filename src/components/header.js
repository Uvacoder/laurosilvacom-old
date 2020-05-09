import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import theme from '../config/theme'
import Logo from '../images/logo.svg'

const config = require('../config/website')

export default function Header() {
  const wrapperStyles = css`
    background-color: ${theme.accents4};
    display: flex;
    justify-content: center;
    padding: 25px 20px;
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
      color: ${theme.accents2};
      cursor: pointer;
      display: flex;
      justify-content: center;
      white-space: nowrap;
      font-size: 12px;
      font-weight: 400;
      margin-left: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    a:hover {
      color: ${theme.accents1};
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
    img {
      width: 170px;
    }
    @media (max-width: 500px) {
      img {
        width: 140px;
      }
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <Link to="/" css={logoStyles}>
          <img alt={config.siteTitle} src={Logo} />
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
