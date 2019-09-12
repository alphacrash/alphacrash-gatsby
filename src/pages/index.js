import React from "react"
import { Link, graphql } from "gatsby"
import { Card } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="alphacrash" />

      <h1>Posts</h1>

      <div>
        {posts.map(({ node: post }) => (
          <Card className="bg-transparent" style={{ border: `none`, paddingTop: `1em`, paddingBottom: `1em` }}>
            <span className="text-secondary">{post.frontmatter.date}</span>
            <Link to={post.frontmatter.path} className="text-primary" style={{ fontSize: `30px` }}>{post.frontmatter.title}</Link>
          </Card>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query blogIndex {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          path
          date(formatString: "MMM Do YYYY")
        }
      }
    }
  }
}
`

export default BlogIndex