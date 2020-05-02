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

export default function NoteTemplate({data: {mdx: note}}) {
  const content = css`
    max-width: 720px;
    margin: auto;
    padding: 0 20px;
    font-weight: 400;
    p {
      margin-top: 21px;
      line-height: 1.6;
    }
    h2 {
      margin-top: 45px;
      font-size: 30px;
      margin-bottom: 23px;
    }
    strong {
      color: ${theme.accents1};
    }
    a {
      font-weight: 700;
    }
    hr {
      border-width: 1px;
      border-style: solid;
      border-color: ${theme.accents4};
      border-radius: 10px;
      margin: 50px 0;
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
        title={note.frontmatter.title}
        description={note.frontmatter.lead}
        image={note.frontmatter.image.sharp.fluid}
      />

      <Wrapper>
        <div css={headerWrapper}>
          {note.frontmatter.tags.map((tag, i) => (
            <Link
              to={`/tags/${_.kebabCase(tag)}`}
              key={i}
              aria-label="Note Icon"
            >
              <Image
                loading="eager"
                css={css({width: 60, margin: 'auto'})}
                fluid={note.frontmatter.icon.sharp.fluid}
              />
            </Link>
          ))}
          <div>
            <h1>{note.frontmatter.title}</h1>
            {note.frontmatter.tags.map((tag, i) => (
              <Link
                to={`/tags/${_.kebabCase(tag)}`}
                key={i}
                aria-label="Tutorial Icon"
              >
                <button type="button" css={tagStyle}>
                  {note.frontmatter.tags}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>

      <div css={content}>
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{note.body}</MDXRenderer>
        </MDXProvider>
        <Newsletter />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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
