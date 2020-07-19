import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import Grid from '../utils/grid'
import Wrapper from '../utils/wrapper'

export default function Tags({pageContext, data}) {
  const {tag} = pageContext
  const {edges: posts} = data.allMdx

  const tagHeaderStyle = css`
    margin-top: 50px;
  `

  return (
    <Layout>
      <SEO title={`Blog Posts tagged as ${tag}`} />

      <Wrapper>
        <h1 css={tagHeaderStyle}>#{`${tag}`}</h1>
        <p>Blog Posts tagged as {`${tag}`}</p>
      </Wrapper>

      <Grid>
        {posts.map(({node: post}) => (
          <Link key={post.id} to={`/${post.frontmatter.slug}`}>
            <Card
              postIcon={post.frontmatter.icon.sharp.fluid}
              postTitle={post.frontmatter.title}
              postLead={post.frontmatter.lead}
              postImage={post.frontmatter.image.sharp.fluid}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            tags
            date
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
