import React from 'react'
import {Global, css} from '@emotion/core'
import Header from './header'
import Footer from './footer'
import reset from '../libs/reset'
import theme from '../config/theme'

const custom = css`
  body {
    background: ${theme.background};
    color: ${theme.accents2};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 19px;
    font-weight: 600;
  }

  code {
    padding: 3px 5px;
    color: ${theme.accents2};
    background: ${theme.accents4};
    font-weight: 500;
    border-radius: 3px;
    font-size: 15px;
  }

  blockquote {
    margin-top: 21px;
    border-left: 6px solid ${theme.success};
    margin-left: 24px;
    margin-right: 54px;
    padding-bottom: 10px;
    padding-left: 24px;
    padding-top: 10px;
    color: ${theme.accents3};
    background: #f5f5f51a;
    border-radius: 3px;
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
    color: ${theme.success};
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  p {
    color: ${theme.accents2};
    line-height: 1.6;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.accents1};
  }

  img {
    width: 100%;
  }

  ul li {
    margin: 0 0 1.5rem;
    font-size: 1.25rem;
    line-height: 1.4;
    margin-top: 21px;
  }
  hr {
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.accents4};
    border-radius: 10px;
    margin: 50px 0;
  }

  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
  }
  .anchor svg {
    fill: ${theme.success};
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
      <a
        rel="webmention"
        aria-hidden
        href="https://webmention.io/laurosilva.com/webmention"
      >
        webmention
      </a>
      <a
        aria-hidden
        rel="pingback"
        href="https://webmention.io/laurosilva.com/xmlrpc"
      >
        webmention
      </a>
    </div>
  )
}

export default Layout
