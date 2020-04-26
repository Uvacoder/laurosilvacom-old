import React from 'react'
import {Global, css} from '@emotion/core'
import fonts from '../utils/typography'
import Header from './header'
import Footer from './footer'
import reset from '../libs/reset'
import theme from '../config/theme'

const custom = css`
  body {
    background: ${theme.accents8};
    color: ${theme.accents1};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
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
    fill: ${theme.successLight};
  }
`

export const globalStyles = css`
  ${custom}
  ${fonts},
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
