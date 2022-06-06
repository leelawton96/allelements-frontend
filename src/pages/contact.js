import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import ContactForm from "../components/ContactForm/contact-form"



const Contact = () => {
  return (
    <Layout>
      <main>
      <Seo 
        url="https://www.all-elements.co.uk"
        title="Contact Us | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />

      <div class="container-fluid content-bg">
          <img class="content-home-bg" src="assets/home_bg.svg" alt=""/>

          <div class="container-fluid content-header-container">
            <div class="container">
              <div class="row">
  
                <div class="col-12 my-auto text-center">
                  <h1 class="white mb-4">Contact <span class="font-bold">us.</span> </h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-center  justify-content-center">
                      <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                      <li class="breadcrumb-item active-breadcrumb" aria-current="page">Contact</li>
                    </ol>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>



               <div class="container-fluid text-center pb-5">
                <div class="container py-3">
                  <div class="row pt-5 pb-0 pb-md-3 px-md-5 mx-auto">
                    <h2>We'd love to <span class="font-bold">hear from you.</span> </h2>
                    <p class="m-0">If you have an questions about the services we provide, please contact us by filling out the form below and we will get in touch with you shortly. Alternatively, you can give us a call – we hope to hear from you soon.</p>
                  </div>
      
                  <address class="row pt-5 pb-md-5 pt-lg-0">
      
                    <div class="col-12 col-md-4 pb-4 pb-lg-0">
                      <div class="container-bg py-4 px-4 contact-box">
                        <div class="circle d-flex mx-auto mb-4">
                          <StaticImage className="m-auto" src="../images/tel.svg" alt="Telephone" layout="fixed" placeholder="tracedSVG"/>
                        </div>  
                        <h3 class="font-bold">Telephone</h3>
                        <h4 class="boiler-price orange"><Link to="tel:+01782 901071">01782 901071</Link></h4>
                      </div>
                    </div>

                    <div class="col-12 col-md-4 pb-4 pb-lg-0">
                      <div class="container-bg py-4 px-4 contact-box">
                        <div class="circle d-flex mx-auto mb-4">
                          <StaticImage className="m-auto" src="../images/location.svg" alt="Location" layout="fixed" placeholder="tracedSVG"/>
                        </div>  
                        <h3 class="font-bold">Address</h3>
                        <h4 class="boiler-price orange">41 Third Avenue, Stoke-on-Trent,<br/> Staffordshire, ST71BY</h4>
                      </div>
                    </div>

                    <div class="col-12 col-md-4 pb-4 pb-lg-0">
                      <div class="container-bg py-4 px-4 contact-box">
                        <div class="circle d-flex mx-auto mb-4">
                          <StaticImage className="m-auto" src="../images/mail.svg" alt="Mail" layout="fixed"  placeholder="tracedSVG"/>
                        </div>  
                        <h3 class="font-bold">Email</h3>
                        <h4 class="boiler-price orange"><Link to="mailto:info@all-elements.co.uk">info@all-elements.co.uk</Link></h4>
                      </div>
                    </div>
      
                    
      
                  </address>
      
                  <Link className="btn-orange mb-5 mb-lg-5" to="/">Get Started Now</Link>
                  
                </div>
                </div>


          <ContactForm />

      </main>
    </Layout>
  )
}

export default Contact