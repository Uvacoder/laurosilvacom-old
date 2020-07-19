import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import theme from '../config/theme'
import {fonts} from '../libs/typography'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default function Header() {
  const wrapperStyles = css`
    background: ${theme.primary};
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
      opacity: 0.8;
      padding: 6px;
      line-height: 17px;
      border-radius: 4px;
      transition: all 0.15s ease;
      font-family: ${fonts.regular};
    }
    a:hover {
      opacity: 1;
      background: #ffffff57;
    }
    @media (max-width: 480px) {
      a {
        font-size: 14px;
        margin-left: 5px;
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
      .gatsby-image-wrapper {
        width: 50px;
      }
    }
  `

  const activeLinkStyles = {background: '#ffffff57', opacity: '1'}

  return (
    <div css={wrapperStyles}>
      <div css={groupStyles}>
        <Link to="/" css={logoStyles}>
          <Image />
          <span>Lauro Silva</span>
        </Link>
        <div css={navStyles}>
          <Link to="/about" activeStyle={activeLinkStyles}>
            About
          </Link>
          <Link to="/contact" activeStyle={activeLinkStyles}>
            Contact
          </Link>
          <Link to="/posts" activeStyle={activeLinkStyles}>
            Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
