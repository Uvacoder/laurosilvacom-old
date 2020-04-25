import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function PagesTemplate({data: {mdx: page}}) {
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.excerpt}
        image={page.frontmatter.image.sharp.fluid}
      />

      <h1>{page.frontmatter.title}</h1>
      <p>{page.frontmatter.lead}</p>

      <MDXRenderer>{page.body}</MDXRenderer>
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
