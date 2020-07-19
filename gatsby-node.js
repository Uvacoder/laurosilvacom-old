const _ = require('lodash')

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions
  const result = await graphql(`
    query {
      pages: allMdx(filter: {fileAbsolutePath: {regex: "//pages//"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      posts: allMdx(filter: {fileAbsolutePath: {regex: "//posts//"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create pages', result.errors)
  }

  // renders pages for posts
  const posts = result.data.posts.nodes
  posts.forEach(post => {
    actions.createPage({
      path: `/${post.frontmatter.slug}/`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
        url: `https://laurosilva.com/${post.frontmatter.slug}/`,
      },
    })
  })

  // renders pages for lessons
  const pages = result.data.pages.nodes
  pages.forEach(page => {
    actions.createPage({
      path: `/${page.frontmatter.slug}/`,
      component: require.resolve('./src/templates/page.js'),
      context: {
        slug: page.frontmatter.slug,
      },
    })
  })

  // renders pages for courses, based from posts tags
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: require.resolve('./src/templates/tag.js'),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
