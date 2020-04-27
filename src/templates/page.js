import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../config/theme'
import Wrapper from '../utils/wrapper'

export default function PagesTemplate({data: {mdx: page}}) {
  const content = css`
    max-width: 720px;
    margin: auto;
    padding: 0 20px;
    font-weight: 400;
    p {
      margin-top: 21px;
      line-height: 1.5em;
    }
    h2 {
      margin-top: 45px;
      font-size: 30px;
      margin-bottom: 23px;
    }
    blockquote {
      margin-top: 21px;
      border-left: 6px solid ${theme.accents4};
      margin-left: 24px;
      margin-right: 54px;
      padding-bottom: 10px;
      padding-left: 24px;
      padding-top: 10px;
      color: ${theme.accents3};
    }
    strong {
      color: ${theme.accents1};
    }
  `
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.excerpt}
        image={page.frontmatter.image.sharp.fluid}
      />

      <Wrapper>
        <h1>{page.frontmatter.title}</h1>
        <p>{page.frontmatter.lead}</p>
      </Wrapper>
      <div css={content}>
        <MDXRenderer>{page.body}</MDXRenderer>
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
        slug
        lead
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`
