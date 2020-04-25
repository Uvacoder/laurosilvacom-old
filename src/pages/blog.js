/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'

export default function BlogPage({data}) {
  const allTutorials = data.allMdx.edges

  const emptyQuery = ''
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  // credit: https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial#final-code
  const handleInputChange = event => {
    const query = event.target.value

    // this is how we get all of our tutorials
    const tutorials = data.allMdx.edges || []
    // return all filtered tutorials
    const filteredData = tutorials.filter(tutorial => {
      // destructure data from tutorial frontmatter
      const {title, tags, lead} = tutorial.node.frontmatter

      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string

        lead.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join('') // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from tutorials.filter(tutorial => (//filteredData)) above
    })
  }

  const {filteredData, query} = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const tutorials = hasSearchResults ? filteredData : allTutorials

  return (
    <Layout>
      <SEO title="Writing" />
      <div>
        <input
          type="text"
          aria-label="Search"
          placeholder="Type to filter tutorials..."
          onChange={handleInputChange}
        />
        Total {tutorials.length}
      </div>
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
  query WritingPage {
    allMdx(
      sort: {fields: frontmatter___tutorialID, order: DESC}
      filter: {fileAbsolutePath: {regex: "//tutorials//"}}
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            tutorialID
            lead
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
