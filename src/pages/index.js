import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
          <small>{post.node.frontmatter.date}</small>
          <br />
          <Link to={post.node.frontmatter.path}><h2>{post.node.frontmatter.title}</h2></Link>
          <br />
          <br />
          <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date]}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default IndexPage
