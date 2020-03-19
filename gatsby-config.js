const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://laurosilva.com`;

module.exports = {
  siteMetadata: {
    title: `Lauro Silva`,
    description: `I’m a software engineer specializing in modern JavaScript. I enjoy learning in public and writing tutorials that are accessible and intuitive to new developers.`,
    author: `@laurosilvacom`,
    siteUrl,
    social: {
      twitter: `laurosilvacom`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://laurosilva.com',
        sitemap: 'https://laurosilva.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
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
              tight: false,
              fromHeading: 1,
              toHeading: 6,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `
              <svg width="19px" height="13px" viewBox="0 0 19 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard" transform="translate(-5.000000, -5.000000)" fill="#4E01FF" fill-rule="nonzero">
                          <g id="Group" transform="translate(5.000000, 5.000000)">
                              <path d="M3.75,7.5 L5,7.5 L5,8.75 L3.75,8.75 C1.875,8.75 0,6.6375 0,4.375 C0,2.1125 1.9375,0 3.75,0 L8.75,0 C10.5625,0 12.5,2.1125 12.5,4.375 C12.5,6.1375 11.3625,7.775 10,8.4375 L10,6.9875 C10.725,6.425 11.25,5.4 11.25,4.375 C11.25,2.775 9.975,1.25 8.75,1.25 L3.75,1.25 C2.525,1.25 1.25,2.775 1.25,4.375 C1.25,5.975 2.5,7.5 3.75,7.5 Z M15,3.75 L13.75,3.75 L13.75,5 L15,5 C16.25,5 17.5,6.525 17.5,8.125 C17.5,9.725 16.225,11.25 15,11.25 L10,11.25 C8.775,11.25 7.5,9.725 7.5,8.125 C7.5,7.0875 8.025,6.075 8.75,5.5125 L8.75,4.0625 C7.3875,4.725 6.25,6.3625 6.25,8.125 C6.25,10.3875 8.1875,12.5 10,12.5 L15,12.5 C16.8125,12.5 18.75,10.3875 18.75,8.125 C18.75,5.8625 16.875,3.75 15,3.75 Z" id="Shape"></path>
                          </g>
                      </g>
                  </g>
              </svg>`,
              maintainCase: false,
              removeAccents: true,
            },
          },
          { resolve: 'gatsby-remark-smartypants' },
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [{ regex: '^/tutorials' }],
        excludePaths: ['/'],
        height: 2,
        prependToBody: false,
        color: `#60d9fa`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `tutorials`,
        path: `${__dirname}/tutorials/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        domain: 'pageviews.laurosilva.com',
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
};
