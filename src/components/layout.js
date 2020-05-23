import React from 'react'
import {Global, css} from '@emotion/core'
import Header from './header'
import Footer from './footer'
import reset from '../libs/reset'
import theme from '../config/theme'

const custom = css`
  body {
    background: ${theme.background};
  }
  .highlight-line {
    background-color: rgb(0, 30, 56);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #5533fe;
  }

  code {
    padding: 3px 5px;
    background: ${theme.accents2};
    border-radius: 5px;
    font-size: 15px;
  }

  blockquote {
    margin-top: 21px;
    margin-left: 0px;
    margin-right: 0px;
    padding-bottom: 10px;
    padding-left: 24px;
    padding-top: 10px;
    background: ${theme.accents1};
    border: 1px solid ${theme.accents2};
    border-left: 6px solid ${theme.danger};
    color: ${theme.accents3};
    border-radius: 5px;
    padding-right: 10px;
  }

  button:focus {
    outline: 0;
  }
  input[type='text'],
  input[type='password'],
  textarea,
  select {
    outline: none;
  }

  a {
    color: ${theme.danger};
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  p {
    line-height: 1.6;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }

  img {
    width: 100%;
  }

  ul li {
    margin: 0 0 1.5rem;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 21px;
  }
  hr {
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.accents2};
    border-radius: 10px;
    margin: 50px 0;
  }
  .anchor svg {
    fill: ${theme.danger};
  }
  .anchor {
    padding-right: 10px;
    margin-left: -30px;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  }
  @media (max-width: 620px) {
    .anchor {
      padding-right: 2px;
      margin-left: -15px;
    }
  }
  h1:hover .anchor {
    opacity: 1;
  }
  h2:hover .anchor {
    opacity: 1;
  }
  h3:hover .anchor {
    opacity: 1;
  }
  h4:hover .anchor {
    opacity: 1;
  }
  h5:hover .anchor {
    opacity: 1;
  }
  h6:hover .anchor {
    opacity: 1;
  }
  .anchor svg path {
  }
`

export const globalStyles = css`
  ${custom}
  ${reset},
`

function Layout({children}) {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
