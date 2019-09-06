import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <h1>{post.frontmatter.title}</h1>
            <p>
                <span className="text-muted">{post.frontmatter.date}</span>
            </p>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link to="/">Go back</Link>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path:{eq:$path}}) {
            html
            frontmatter {
                path
                title
                author
                date(formatString: "MMM Do YYYY")
            }
        }
    }
`