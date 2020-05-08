import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import Grid from '../utils/grid'

export default function Tags({pageContext, data}) {
  const {tag} = pageContext
  const {edges: tutorials} = data.allMdx

  const tagHeaderStyle = css`
    margin-top: 50px;
  `

  return (
    <Layout>
      <SEO title={`Tutorials tagged as ${tag}`} />

      <Grid>
        <h1 css={tagHeaderStyle}>{`${tag}`}</h1>
        <p>Tutorials tagged as {`${tag}`}</p>
        {tutorials.map(({node: tutorial}) => (
          <Link key={tutorial.id} to={`/${tutorial.frontmatter.slug}`}>
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
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
        }
      }
    }
  }
`
