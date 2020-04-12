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
        <Image
          css={{top: 0, left: 0, right: 0, bottom: 0}}
          style={{
            position: `absolute`,
            zIndex: `-1`,
          }}
          loading="eager"
          fluid={tutorial.frontmatter.hero.sharp.fluid}
        />
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
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
        hero {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon {
          sharp: childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
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

const PlayIcon = styled.img`
  width: 36px;
  border-radius: 0;
  position: absolute;
  top: 25%;
  right: 25%;
  opacity: 0.9;
`

const PlayButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 24px;
  white-space: nowrap;
  width: 90px;
  height: 90px;
  color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  background: #0a0a25;
  backdrop-filter: blur(5px);
  z-index: 99;
  text-decoration: none;
  padding: 18px 20px 22px;
  background-position: 38px center;
  background-repeat: no-repeat;
  border-radius: 50px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.4);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 30px;
  :hover {
    background: ${props => props.theme.color.primary.blue};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 60px;
    border-color: rgb(255, 255, 255);
    img {
      opacity: 1;
    }
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    top: 80%;
  }
`
