/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import {graphql, Link} from 'gatsby'
import Image from 'gatsby-image'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Code from '../components/code'
import SEO from '../components/seo'
import Wrapper from '../utils/wrapper'
import theme from '../config/theme'
import Newsletter from '../components/newsletter'

const components = {
  code: Code,
}

const _ = require('lodash')

export default function TutorialTemplate({data: {mdx: tutorial}}) {
  const content = css`
    max-width: 720px;
    margin: auto;
    padding: 0 20px;
    font-weight: 400;
    strong {
      color: ${theme.accents1};
    }
    a {
      font-weight: 700;
    }
  `

  const headerWrapper = css`
    display: grid;
    grid-template-columns: 80px 1fr;
    text-align: left;
    grid-gap: 30px;
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `

  const tagStyle = css`
    border-radius: 4px;
    font-size: 16px;
    background-color: transparent;
    border: 2px solid ${theme.accents4};
    color: ${theme.accents3};
    transition: transform 160ms;
    cursor: pointer;
    padding: 6px 20px;
    margin-top: 10px;
    :hover {
      background: ${theme.accents4};
      transform: scale(1.05);
      box-shadow: 0 0 8px #05121f;
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
                loading="eager"
                css={css({width: 80, margin: 'auto', marginTop: '10px'})}
                fluid={tutorial.frontmatter.icon.sharp.fluid}
              />
            </Link>
          ))}
          <div>
            <h1>{tutorial.frontmatter.title}</h1>
            {tutorial.frontmatter.tags.map((tag, i) => (
              <Link
                to={`/tags/${_.kebabCase(tag)}`}
                key={i}
                aria-label="Tutorial Icon"
              >
                <button type="button" css={tagStyle}>
                  {tutorial.frontmatter.tags}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>

      <div css={content}>
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{tutorial.body}</MDXRenderer>
        </MDXProvider>
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
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        icon {
          sharp: childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`
