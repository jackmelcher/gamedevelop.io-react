import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" description="404: Page Not found"/>
    <h1>404: Not Found</h1>
    <img src="images/logo1.svg" alt="logo" className="logomain"/>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
