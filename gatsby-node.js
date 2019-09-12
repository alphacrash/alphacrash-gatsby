const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
        allMdx {
            edges {
              node {
                id
                frontmatter {
                  path
                }
              }
            }
        }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/components/template.js`),
      context: { id: node.id },
    })
  })
}