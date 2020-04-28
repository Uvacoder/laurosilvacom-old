import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import NoteCard from '../components/note-card'
import SEO from '../components/seo'
import Grid from '../utils/grid'

export default function Labels({pageContext, data}) {
  const {label} = pageContext
  const {edges: notes} = data.allMdx

  return (
    <Layout>
      <SEO title={`Notes with ${label} label`} />

      <Grid>
        <h1>{`${label}`}</h1>
        <p>Notes with {`${label}`} label</p>
        {notes.map(({node: note}) => (
          <Link key={note.id} to={`/${note.frontmatter.slug}`}>
            <NoteCard
              noteIcon={note.frontmatter.icon.sharp.fluid}
              noteTags={note.frontmatter.tags}
              noteTitle={note.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($label: String) {
    allMdx(
      limit: 2000
      sort: {fields: frontmatter___noteID, order: DESC}
      filter: {frontmatter: {labels: {in: [$label]}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            labels
            noteID
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
