import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import InnerHTML from 'dangerously-set-html-content'



const BoilerQuoteTool = () => {

  const html = `
  <script async defer id="truequote_script" src="https://truequote.co.uk/quote/alle20210421091343/js"></script>
  `


  return (
    <Layout>
      <main>
      <Seo 
        url="https://all-elements.co.uk"
        title="Get a FREE Boiler Quote | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />
      
      <InnerHTML html={html} />

      </main>
    </Layout>
  )
}

export default BoilerQuoteTool