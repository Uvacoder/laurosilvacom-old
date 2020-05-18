import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Lauro from '../images/logo.svg'
import theme from '../config/theme'

const config = require('../config/website')

export default function Header() {
  const wrapperStyles = css`
    background: ${theme.foreground};
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
      line-height:0
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
    a:nth-of-type(3) {
      background: ${theme.success};
      color: ${theme.accents1};
      opacity: 1;
      padding-bottom: 8px;
    }
    @media (max-width: 520px) {
      a:nth-of-type(1) {
        display: none;
      }
    }
  `

  const logoStyles = css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    span {
      color: ${theme.background};
      font-size: 22px;
      font-weight: 700;
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <Link to="/" css={logoStyles}>
          <span>Lauro Silva</span>
        </Link>
        <div css={navStyles}>
          <a href="https://twitter.com/laurosilvacom" rel="me">
            @laurosilvacom
          </a>
          <Link to="/blog">Blog</Link>
          <a href="https://laurosilvacom.substack.com/subscribe" rel="me">
            Newsletter
          </a>
        </div>
      </div>
    </div>
  )
}
