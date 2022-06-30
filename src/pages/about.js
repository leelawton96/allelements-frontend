import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import TestimonialScroller from "../components/TestimonialScroller/testimonial-scroller"
import HomeBG from "../images/home_bg.svg"
import Check from "../images/check_icon.svg"
import AboutImage from "../images/about.png"
import { Link } from "gatsby"




const AboutPage = () => {
  return (
    <Layout>
      <main>
      <Seo 
        url="https://all-elements.co.uk"
        title="About | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />
  {/* Header Image */}

  <div class="container-fluid content-bg">
    <img class="content-home-bg" src={HomeBG} alt=""/>

    <div class="container-fluid content-header-container">
      <div class="container">
        <div class="row">

          <div class="col-12 my-auto text-center">
            <h1 class="white mb-4">About <span class="font-bold">All Elements.</span> </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb text-center  justify-content-center">
                <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                <li class="breadcrumb-item active-breadcrumb" aria-current="page">About</li>
              </ol>
            </nav>
          </div>

        </div>
      </div>
    </div>
  </div>

  {/* About Section */}

  <div class="container py-5 about-section">
    <div class="row py-5">
      <div class="col-12 col-lg-6 p-4">
        <img class="w-100" src={AboutImage} alt=""/>
      </div>
      <div class="col-12 col-lg-6 p-5">
        <h4 class="font-bold orange font-uppercase">Who are we?</h4>
        <h2 class="me-md-5">Experts in all things <span class="font-bold">heating & plumbing.</span></h2>
        <p>All Elements Property Services Ltd is a heating company based in Stoke-on-Trent. We have been providing the highest quality installations, servicing, and repairs for our valued customers for the last 20 years. Our engineers are all time served, with over 50 years of collective experience and as such, we are well equipped to deal with all ages of appliances, and all types of installations. Making sure you have a warm home, and a hot shower is what we live for and with our bespoke installations and the pride we take in our work, you can be certain you will be getting the best possible service.</p>
        <ul>
          <li>20 Years Experience</li>
          <li>Local</li>
          <li>Dependable</li>
        </ul>
        <Link className="btn-orange" to="/contact/">Get in Touch</Link>
      </div>
    </div>
  </div>



    <TestimonialScroller />



            {/* Why Choose Us Section */}

            <div class="container-fluid text-center">
              <div class="container py-5">

                <div class="row py-4">
                  <h2>Why <span class="font-bold">choose us?</span> </h2>
                  <p>Arranging an installation couldn't be easier!</p>
                </div>

                <div class="row pb-5">
                  <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                    <div class="container-bg py-5 px-3 container-usps">
                      <img class="pb-4" src={Check} alt="Number 1"/>
                      <h3 class="font-bold">Gas-Safe</h3>
                      <p>All our boilers are installed by qualified, experienced gas-safe registered engineers.</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                    <div class="container-bg py-5 px-3 container-usps">
                      <img class="pb-4" src={Check} alt="Number 1"/>
                      <h3 class="font-bold">Peace of mind</h3>
                      <p>For your piece of mind all installations are covered by our 12-month workmanship warranty. Any issues and we’ll be there.</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                    <div class="container-bg py-5 px-3 container-usps">
                      <img class="pb-4" src={Check} alt="Number 1"/>
                      <h3 class="font-bold">Guaranteed</h3>
                      <p>All the boilers we fit come with up to 12 years manufacturer parts and labour warranties. Which we’ll register for you! Giving you hassle free heating for years to come.</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                    <div class="container-bg py-5 px-3 container-usps">
                      <img class="pb-4" src={Check} alt="Number 1"/>
                      <h3 class="font-bold">Spread the cost</h3>
                      <p>To put a cherry on an already delicious cake, we can also offer finance for our installations. Helping to spread the cost up to 10 years*</p>
                    </div>
                  </div>
                </div>
                
                <Link className="btn-orange mb-5 mb-lg-5" to="/contact/">Get Started Now</Link>

              </div>
            </div>
      </main>
    </Layout>
  )
}

export default AboutPage