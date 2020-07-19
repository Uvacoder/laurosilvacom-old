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
import Newsletter from '../components/newsletter'
import {fonts} from '../libs/typography'

const components = {
  code: Code,
}

const _ = require('lodash')

export default function PostTemplate({data: {mdx: post}}) {
  const content = css`
    max-width: 720px;
    margin: auto;
    padding: 0 20px;
    strong {
      color: ${theme.foreground};
    }
    a {
      font-family: ${fonts.semibold};
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

  const NewsletterWrapper = css`
    max-width: 720px;
    margin: auto;
    border-radius: 5px;
    padding: 20px;
    background: ${theme.accents1};
    border: 1px solid ${theme.accents2};
    margin-top: 100px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    @media (max-width: 520px) {
      margin: 20px;
    }
  `

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.lead}
        image={post.frontmatter.image.sharp.fluid}
      />

      <Wrapper>
        <div css={headerWrapper}>
          {post.frontmatter.tags.map((tag, i) => (
            <Link
              to={`/tags/${_.kebabCase(tag)}`}
              key={i}
              aria-label="Post Icon"
            >
              <Image
                fluid={post.frontmatter.icon.sharp.fluid}
                css={IconStyle}
              />
            </Link>
          ))}
          <h2>{post.frontmatter.title}</h2>
        </div>
        {post.frontmatter.video === true ? null : (
          <Image
            loading="eager"
            css={ImageStyle}
            fluid={post.frontmatter.image.sharp.fluid}
          />
        )}
      </Wrapper>

      <div css={content}>
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
      <div css={NewsletterWrapper}>
        <h2>Newsletter 📫</h2>
        <p>
          I'm pretty into React, JavaScript, and tooling. My weekly emails
          reflect this preference. Get an update when something new comes out by
          signing up below! You can always unsubscribe.
        </p>
        <Newsletter />
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
