/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()

const config = require('./src/config/website')

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://laurosilva.com`

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: `I'm a software engineer. I enjoy building thoughtful software and helping individuals become better programmers.`,
    author: `@laurosilvacom`,
    siteUrl,
    social: {
      twitter: `laurosilvacom`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://laurosilva.com`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/libs/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`400`, `600`, `700`],
          },
          {
            family: `Fira Mono`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://laurosilva.com',
        sitemap: 'https://laurosilva.com/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1800,
              linkImagesToOriginal: false,
              withWebp: true,
              loading: 'eager',
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: true,
              fromHeading: 1,
              toHeading: 6,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {resolve: 'gatsby-remark-smartypants'},
        ],
        plugins: [{resolve: 'gatsby-remark-images'}],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `tutorials`,
        path: `${__dirname}/content/tutorials/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `tutorials`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4e01ff`,
        theme_color: `#4e01ff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
