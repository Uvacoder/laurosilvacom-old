import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {css} from '@emotion/core'

export default function Image() {
  const ImageWrapper = css`
    img {
      border-radius: 3px;
    }
  `
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: {eq: "lauro.png"}) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div css={ImageWrapper}>
      <Img fluid={data.aboutImage.childImageSharp.fluid} />
    </div>
  )
}
