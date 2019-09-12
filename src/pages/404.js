import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: `center` }}>
      <h1 style={{ marginBottom: `1em` }}>page not found, a haiku</h1>

      <p>
        our search is lonely
      </p>
      <p>
        a footprint left in pure snow
      </p>
      <p>
        blown into nothing
      </p>

    </div>
  </Layout>
)

export default NotFoundPage
