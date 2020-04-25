import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'

export default function Tags({pageContext, data}) {
  const {tag} = pageContext
  const {edges: tutorials} = data.allMdx

  return (
    <Layout>
      <SEO title={`Tutorials tagged as ${tag}`} />

      <h1>{`${tag}`}</h1>
      <p>Tutorials tagged as {`${tag}`}</p>

      <div>
        {tutorials.map(({node: tutorial}) => (
          <Link key={tutorial.id} to={`${tutorial.frontmatter.slug}`}>
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: {fields: frontmatter___tutorialID, order: DESC}
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
            tutorialID
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
