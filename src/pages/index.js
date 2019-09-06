import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"


const IndexPage = () => (
  <Layout>
    <SEO title="alphacrash" />
    <h1>Posts</h1>

    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                excerpt={node.frontmatter.excerpt}
              />
            ))}
          </div>
        )
      }} />
  </Layout>
)

const indexQuery = graphql`
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
`

export default IndexPage
