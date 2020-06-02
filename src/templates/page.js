import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function PagesTemplate({data: {mdx: page}}) {
  const content = css`
    max-width: 780px;
    margin: auto;
    padding: 0 20px;
    font-weight: 400;
    margin-top: 80px;
  `
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        image={page.frontmatter.image.sharp.fluid}
      />

      <div css={content}>
        <h1>{page.frontmatter.title}</h1>
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
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`
