const _ = require('lodash')

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions
  const result = await graphql(`
    query {
      notes: allMdx(filter: {fileAbsolutePath: {regex: "//notes//"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      tutorials: allMdx(filter: {fileAbsolutePath: {regex: "//tutorials//"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      tagsGroup: allMdx(filter: {fileAbsolutePath: {regex: "//tutorials//"}}) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      labelsGroup: allMdx(filter: {fileAbsolutePath: {regex: "//notes//"}}) {
        group(field: frontmatter___labels) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create pages', result.errors)
  }

  // renders pages for tutorials
  const tutorials = result.data.tutorials.nodes
  tutorials.forEach(tutorial => {
    actions.createPage({
      path: `/${tutorial.frontmatter.slug}/`,
      component: require.resolve('./src/templates/tutorial.js'),
      context: {
        slug: tutorial.frontmatter.slug,
      },
    })
  })

  // renders pages for courses, based from tutorials tags
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

  // renders pages, based from notes labels
  const labels = result.data.labelsGroup.group
  labels.forEach(label => {
    createPage({
      path: `/labels/${_.kebabCase(label.fieldValue)}/`,
      component: require.resolve('./src/templates/label.js'),
      context: {
        label: label.fieldValue,
      },
    })
  })

  // renders pages for notes
  const notes = result.data.notes.nodes
  notes.forEach(note => {
    actions.createPage({
      path: `/${note.frontmatter.slug}/`,
      component: require.resolve('./src/templates/note.js'),
      context: {
        slug: note.frontmatter.slug,
      },
    })
  })
}
