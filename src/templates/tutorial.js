/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import {graphql, Link} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import {css} from '@emotion/core'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import Code from '../components/code'
import SEO from '../components/seo'
import Wrapper from '../utils/wrapper'
import theme from '../config/theme'

const components = {
  code: Code,
}

const _ = require('lodash')

export default function TutorialTemplate({data: {mdx: tutorial}}) {
  const content = css`
    max-width: 780px;
    margin: auto;
    padding: 0 20px;
    strong {
      color: ${theme.foreground};
    }
  `
  const ImageStyle = css`
    border-radius: 5px;
    width: 100%;
    height: 500px;
    background: #c5d2d9 no-repeat 50%;
    object-fit: cover;
    margin-top: 20px;
    @media (max-width: 620px) {
      height: 250px;
    }
    img {
      border-radius: 5px;
    }
  `

  const headerWrapper = css`
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
    align-items: center;
    h2 {
      margin: 0;
      align-self: baseline;
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      h2 {
        font-size: 20px;
      }
    }
  `

  const IconStyle = css`
    width: 80px;
    border-radius: 0px;
    align-self: baseline;
    cursor: pointer;
    @media (max-width: 620px) {
      margin: auto;
    }
  `

  return (
    <Layout>
      <SEO
        title={tutorial.frontmatter.title}
        description={tutorial.frontmatter.lead}
        image={tutorial.frontmatter.image.sharp.fluid}
      />

      <Wrapper>
        <div css={headerWrapper}>
          {tutorial.frontmatter.tags.map((tag, i) => (
            <Link
              to={`/tags/${_.kebabCase(tag)}`}
              key={i}
              aria-label="Tutorial Icon"
            >
              <Image
                fluid={tutorial.frontmatter.icon.sharp.fluid}
                css={IconStyle}
              />
            </Link>
          ))}
          <h2>{tutorial.frontmatter.title}</h2>
        </div>
        {tutorial.frontmatter.video === true ? null : (
          <Image
            loading="eager"
            css={ImageStyle}
            fluid={tutorial.frontmatter.image.sharp.fluid}
          />
        )}
      </Wrapper>

      <div css={content}>
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{tutorial.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query data($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        date
        lead
        video
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        icon {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`
