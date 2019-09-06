const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/blog-post.js')

    return graphql(`
    {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMM Do YYYY")
                author
                path
              }
              excerpt
            }
          }
        }
    }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}