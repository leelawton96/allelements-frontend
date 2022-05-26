import React from "react"
import Layout from "../components/Layout/layout"
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