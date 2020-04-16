/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
import Grid from '../components/grid'
import SearchWrapper from '../components/searchWrapper'
import SEO from '../components/seo'

const TutorialsPage = ({data}) => {
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
      <SearchWrapper>
        <Header>All Tutorials</Header>
        <SearchWrapperMain>
          <input
            type="text"
            aria-label="Search"
            placeholder="Type to filter tutorials..."
            onChange={handleInputChange}
          />
          <SearchTotal>Total {tutorials.length}</SearchTotal>
        </SearchWrapperMain>
      </SearchWrapper>

      <Grid>
        {tutorials.map(({node: tutorial}) => (
          <Link
            key={tutorial.id}
            to={`/tutorials/${tutorial.frontmatter.slug}`}
          >
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
              tutorialSlug={`/tutorials/${tutorial.frontmatter.slug}`}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export default TutorialsPage

const Header = styled.h1`
  margin: auto;
  max-width: ${props => props.theme.screen.sm};
  padding-top: 100px;
  position: relative;
  text-align: center;
  font-weight: 700;
  font-size: 52px;
  letter-spacing: -2px;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 36px;
    letter-spacing: -2px;
  }
`

const SearchWrapperMain = styled.div`
  margin: auto;
  max-width: ${props => props.theme.screen.sm};
  position: relative;
  text-align: center;
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 100px;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  z-index: 1;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 10px 20px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      font-size: 36px;
      letter-spacing: -2px;
    }
    p {
      font-size: 22px;
    }
  }
`

const SearchTotal = styled.div`
  border-radius: 10px;
  padding: 18px;
  font-weight: 600;
  color: ${props => props.theme.color.dark.accent200};
  background: ${props => props.theme.color.light.accent100};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px;
  .dark & {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 30px 60px;
    color: ${props => props.theme.color.light.accent100};
    background: ${props => props.theme.color.dark.accent200};
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 0.5rem 0.75rem;
  }
`

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
