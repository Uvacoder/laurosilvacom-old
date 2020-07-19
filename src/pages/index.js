/* eslint-disable react/button-has-type */
import React from 'react'
import {Link, graphql} from 'gatsby'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import Card from '../components/card'
import LessonCard from '../components/lessonCard'
import SEO from '../components/seo'
import theme from '../config/theme'
import Grid from '../utils/grid'
import Newsletter from '../components/newsletter'

const Index = ({data}) => {
  const {edges: posts} = data.allMdx
  const {edges: lessons} = data.allCustomApi

  console.log(lessons)

  const NewsletterWrapper = css`
    max-width: 720px;
    margin: auto;
    padding: 20px;
    margin-top: 50px;
  `
  const NewsletterGroup = css`
  max-width: 720px;
  margin: auto;
  border-radius: 5px;
  padding: 30px;
  background: ${theme.accents1};
  border: 1px solid ${theme.accents2};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
`

  const Hero = css`
    padding: 0 20px;
    background: ${theme.primary};
    padding-bottom: 100px;
  `
  const HeroWrapper = css`
    margin: auto;
    text-align: center;
    padding-top: 40px;
    animation: HeroAnimation 2s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
    h1 {
      color: ${theme.accents1};
      font-size: 50px;
      line-height: 1;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    p {
      margin-top: 10px;
      max-width: 720px;
      margin: auto;
      line-height: 150%;
      color: ${theme.accents1};
      font-size: 24px;
      opacity: 0.7;
    }
    @media (max-width: 620px) {
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 22px;
      }
    }
  `
  const allPosts = css`
    align-items: center;
    display: flex;
    height: 56px;
    max-width: 720px;
    margin: 50px 0;
    margin-bottom: 10px;
    a {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
    }
    button {
      border-radius: 4px;
      font-size: 16px;
      background-color: transparent;
      border: 1px solid ${theme.success};
      background: ${theme.success};
      color: ${theme.accents1};
      transition: transform 160ms;
      cursor: pointer;
      padding: 6px 20px;
      :hover {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.08),
          0 1px 3px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }
    }
    h2 {
      font-size: 30px;
      line-height: 1.4;
      margin-top: 0;
      margin-bottom: 0;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      display: grid;
      a {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        margin-left: inherit;
      }
    }
  `

  return (
    <Layout>
      <SEO title="Home" />

      <div css={Hero}>
        <div css={HeroWrapper}>
          <h1>Hey, I'm Lauro!</h1>
          <p>
            I enjoy building thoughtful software and helping individuals become
            better programmers.
          </p>
        </div>
      </div>

      <Grid>
        <div css={allPosts}>
          <h2>Posts</h2>
          <Link to="/posts">
            <button>View All</button>
          </Link>
        </div>
        {posts.map(({node: post}) => (
          <Link key={post.id} to={`/${post.frontmatter.slug}`}>
            <Card
              postIcon={post.frontmatter.icon.sharp.fluid}
              postTitle={post.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>

      <Grid>
        <div css={allPosts}>
          <h2>Lessons</h2>
          <a href="https://egghead.io/instructors/lauro-silva">
            <button>View All</button>
          </a>
        </div>
        
        {lessons.map(({node: lesson}) => (
          <a href={lesson.http_url}>
            <LessonCard
              lessonIcon={lesson.image_128_url}
              lessonTitle={lesson.title}
            />
          </a>
        ))}       
      </Grid>
      
      <div css={NewsletterWrapper}>
        <div css={NewsletterGroup}> 
          <h2>Newsletter</h2>
          <p>
            I'm pretty into React, JavaScript, and tooling. My weekly emails
            reflect this preference. Get an update when something new comes out by
            signing up below! You can always unsubscribe.
          </p>
          <Newsletter />
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexPage {
    allCustomApi( limit: 8) {
      edges {
        node {
          id
          http_url
          title
          image_128_url
        }
      }
    }
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "//posts//"}}
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            date
            lead
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
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
