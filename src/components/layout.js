/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'font-awesome/css/font-awesome.min.css';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{ textAlign: `center`, padding: `1em`, marginBottom: `2em` }}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div style={{ fontFamily: `roboto` }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>
            {children}
          </main>
        </div>
      </div >
      <footer
        style={{
          right: `0`,
          bottom: `0`,
          left: `0`,
          padding: `1.5em`,
          marginTop: `2em`,
          textAlign: `center`
        }}>
        <div style={{ padding: `1em` }}>
          <Link to="about" style={{ fontSize: `20px` }}> <i className="fa fa-at" /> about me</Link>
          &emsp;
          <a href="https://github.com/alphacrash/" style={{ fontSize: `20px` }}><i className="fa fa-github" /> github</a>
          &emsp;
          <a href="https://twitter.com/itsAlphaCrash" style={{ fontSize: `20px` }}><i className="fa fa-twitter" /> twitter</a>
        </div>
        <p>a blog by SUD</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
