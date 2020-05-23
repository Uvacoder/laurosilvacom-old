/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import {graphql, Link} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
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
    font-weight: 400;
    strong {
      color: ${theme.foreground};
    }
    a {
      font-weight: 600;
    }
  `

  const headerWrapper = css`
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
    align-items: center;
    h2 {
      margin: 0;
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

  const tagStyle = css`
    border-radius: 4px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid ${theme.accents2};
    color: ${theme.accents3};
    transition: all 0.15s ease;
    cursor: pointer;
    padding: 3px 20px;
    margin: 10px 0;
    padding-bottom: 4px;
    font-family: 'Fira Mono';
    opacity: 0.6;
    :hover {
      background: ${theme.accents1};
      transform: translateY(-1px);
      opacity: 1;
    }
  `

  const IconStyle = css`
    width: 80px;
    border-radius: 0px;
    align-self: baseline;
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
          <Img fluid={tutorial.frontmatter.icon.sharp.fluid} css={IconStyle} />
          <div>
            <h2>{tutorial.frontmatter.title}</h2>
            {tutorial.frontmatter.tags.map((tag, i) => (
              <Link
                to={`/tags/${_.kebabCase(tag)}`}
                key={i}
                aria-label="Tutorial Icon"
              >
                <button type="button" css={tagStyle}>
                  #{tutorial.frontmatter.tags}
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
