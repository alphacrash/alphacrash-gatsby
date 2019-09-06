import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>Hi! I am SUD.</h1>

    <div>
      <p>Welcome to my blog.</p>
      <p>I am currently an undergraduate doing major in CS.</p>
      <p>I love to code, play guitar, read books and think about philosophy in general.</p>
      <p>You can find my codes in my <a href="https://github.com/alphacrash">GitHub</a> page.</p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage