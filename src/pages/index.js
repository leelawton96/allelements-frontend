import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import HomepageHero from "../components/HomepageHero/homepage-hero"
import BoilerScroller from "../components/BoilerScroller/boiler-scroller"
import ProcessSection from "../components/ProcessSection/process-section"
import USPSection from "../components/USPSection/usp-section"
import TestimonialScroller from "../components/TestimonialScroller/testimonial-scroller"
import NotJustBoilers from "../components/NotJustBoilers/not-just-boilers"
import ContactForm from "../components/ContactForm/contact-form"

const IndexPage = () => {
  return (
    <Layout>
    <main>
      <SEO 
        url="https://www.all-elements.co.uk"
        title="All Elements | Boiler installations for all budgets!"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire. From boiler installations and services to bathrooms, get in touch today to find out about our services."
      />
      <HomepageHero />
      <BoilerScroller />
      <ProcessSection />
      <USPSection />
      <TestimonialScroller />
      <NotJustBoilers />
      <ContactForm />
      </main>
    </Layout>
  )
}

export default IndexPage