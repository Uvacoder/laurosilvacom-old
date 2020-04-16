/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import {graphql, Link} from 'gatsby'
import styled, {keyframes} from 'styled-components'
import Image from 'gatsby-image'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Content from '../components/content'
import Code from '../components/code'
import SEO from '../components/seo'

const components = {
  code: Code,
}

const _ = require('lodash')

const TutorialTemplate = ({data: {mdx: tutorial}}) => {
  const rotateState = tutorial.frontmatter.rotate

  return (
    <Layout>
      <SEO
        title={tutorial.frontmatter.title}
        description={tutorial.frontmatter.lead}
        image={tutorial.frontmatter.image.sharp.fluid}
      />

      <Hero>
        {tutorial.frontmatter.tags.map((tag, i) => (
          <Link
            to={`/tags/${_.kebabCase(tag)}`}
            key={i}
            aria-label="Tutorial Icon"
          >
            <RotateIcon className={rotateState === true ? 'rotateTrue' : null}>
              <Icon>
                <Image
                  loading="eager"
                  fluid={tutorial.frontmatter.icon.sharp.fluid}
                />
              </Icon>
            </RotateIcon>
          </Link>
        ))}

        <h1>{tutorial.frontmatter.title}</h1>
        <p>{tutorial.frontmatter.lead}</p>
      </Hero>

      <Content>
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{tutorial.body}</MDXRenderer>
        </MDXProvider>
      </Content>
    </Layout>
  )
}

export default TutorialTemplate

export const query = graphql`
  query data($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        tutorialID
        lead
        rotate
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Icon = styled.div`
  width: 70px;
  margin: auto;
  margin-bottom: 25px;
  img {
    border-radius: 0;
  }
  :hover {
    filter: brightness(1.1) saturate(110%);
  }
`

const RotateIcon = styled.div`
  &.rotateTrue {
    animation: ${rotate} 15s linear infinite;
  }
`
