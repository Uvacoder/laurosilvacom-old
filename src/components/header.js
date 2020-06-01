import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import Lauro from '../images/icon.png'
import theme from '../config/theme'
import {fonts} from '../libs/typography'

const config = require('../config/website')

export default function Header() {
  const wrapperStyles = css`
    background: ${theme.success};
  `

  const groupStyles = css`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding: 20px;
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
      color: ${theme.accents1};
      cursor: pointer;
      display: flex;
      justify-content: center;
      white-space: nowrap;
      font-size: 16px;
      margin-left: 20px;
      opacity: 0.6;
      padding: 6px;
      line-height: 17px;
      border-radius: 4px;
      transition: all 0.15s ease;
      font-weight: 600;
      font-family: ${fonts.regular};
    }
    a:hover {
      opacity: 1;
      background: #ffffff57;
    }
    @media (max-width: 580px) {
      a {
        font-size: 14px;
      }
      a:nth-of-type(1) {
        display: none;
      }
    }
  `

  const logoStyles = css`
    align-items: center;
    display: grid;
    grid-template-columns: 50px 1fr;
    span {
      color: ${theme.accents1};
      font-family: ${fonts.regular};
      padding-left: 10px;
      font-size: 22px;
    }
    img {
      border-radius: 50%;
      width: 50px;
      margin: 0;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      span {
        display: none;
      }
    }
  `

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <Link to="/" css={logoStyles}>
          <img src={Lauro} alt={config.siteTitle} />
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
