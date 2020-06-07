/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()

const config = require('./src/config/website')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.siteAuthor,
    siteUrl: config.siteURL,
    social: {
      twitter: config.siteAuthorTwitter,
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
        name: `pages`,
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
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: config.siteLogo,
      },
    },
  ],
}
