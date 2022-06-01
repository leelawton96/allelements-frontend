import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"


const BoilerQuoteTool = () => {
  return (
    <Layout>
      <main>
      <Seo 
        url="https://www.all-elements.co.uk"
        title="Get a FREE Boiler Quote | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />
      <script async defer id="truequote_script" src="https://truequote.co.uk/quote/alle20210421091343/js" />

      </main>
    </Layout>
  )
}

export default BoilerQuoteTool