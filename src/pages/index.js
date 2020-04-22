import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../containers/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer />
  </Layout>
)

export default IndexPage
