import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import ContactForm from "../components/ContactForm/contact-form"


const BoilerServicing = () => {
  return (
    <Layout>
      <main>
      <Seo 
        url="https://www.all-elements.co.uk"
        title="Boiler Servicing | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />

      <div class="container-fluid content-bg">
          <img class="content-home-bg" src="assets/home_bg.svg" alt=""/>

          <div class="container-fluid content-header-container">
            <div class="container">
              <div class="row">
  
                <div class="col-12 my-auto text-center">
                  <h1 class="white mb-4">Boiler<span class="font-bold"> servicing.</span> </h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-center  justify-content-center">
                      <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li class="breadcrumb-item"><Link to="/">Boilers & Heating</Link></li>
                      <li class="breadcrumb-item active-breadcrumb" aria-current="page">Boiler Servicing</li>
                    </ol>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>

      

        <div class="container-fluid text-center services-pricing-container pb-4">
          <div class="container pt-3 pb-5">
            <div class="row pt-5 w-75 mx-auto">
              <h2>Keep your boiler <span class="font-bold">working as it should.</span> </h2>
              <p class="m-0">Whether you’re a home owner looking to keep your central heating system working at its best, or a landlord with statutory obligations, an annual boiler service and safety check should be a top priority.</p>
            </div>

            <div class="row pt-4 pt-lg-0">

              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 boiler-pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" loading="lazy" src="../images/boiler_fault.svg" alt="Boiler Fault"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Boiler Service</h3>
                  <h3 class="font-bold orange">£60.00</h3>
                </div>
              </div>

              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 boiler-pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" loading="lazy" src="../images/heat_fault.svg" alt="Heat Fault"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Fire Service</h3>
                  <h3 class="font-bold orange">£60.00</h3>
                </div>
              </div>

              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 boiler-pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" loading="lazy" src="../images/cylinder.svg" alt="Cylinder"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Unvented Cylinder Check</h3>
                  <h3 class="font-bold orange">£60.00</h3>
                </div>
              </div>

            </div>


            <div class="row pt-md-4 pb-5 pt-lg-0">

              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 boiler-pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" loading="lazy" src="../images/boiler_install.svg" alt="Boiler Install"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Boiler + 1 Appliance</h3>
                  <h3 class="font-bold orange">£100.00</h3>
                </div>
              </div>

              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 boiler-pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                    <StaticImage className="m-auto" loading="lazy" src="../images/lpg.svg" alt="LPG"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">LPG Service</h3>
                  <h3 class="font-bold orange">£80.00</h3>
                </div>
              </div>

              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 boiler-pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                    <StaticImage className="m-auto" loading="lazy" src="../images/safety.svg" alt="Safety"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Landlord Gas Safety (LGSR)</h3>
                  <h3 class="font-bold orange">From £70</h3>
                </div>
              </div>

            </div>


            <Link className="btn-orange mb-5 mb-lg-5" to="/contact/">Get Started Now</Link>
            
          </div>
        </div>




        <div class="container-fluid cta-section d-flex py-5">

          <div class="container text-center my-auto pb-5 pt-4">


            <div class="row pb-2">
              <h2 class="white">What are you <span class="font-bold">waiting for?</span> </h2>
              <p class="white">Not only are our rates affordable, but you’ll also get added benefits such as free smoke and carbon monoxide alarm testing as well as.</p>
            </div>

            <div class="row">
              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon"  placeholder="tracedSVG"/>
                  <h3 class="font-bold">Timed Appointments</h3>
                  <p>No more ¬waiting in for half the day. We’ll give you a timed appointment and call when we’re on the way.</p>
                </div>
              </div>
  
              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon"  placeholder="tracedSVG"/>
                  <h3 class="font-bold">Digital Certificates</h3>
                  <p>Easy to read certificates are generated instantly and emailed to you.  Never lose this important document again.</p>
                </div>
              </div>
  
              <div class="col-12 col-md-4 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon"  placeholder="tracedSVG"/>
                  <h3 class="font-bold">Email Reminders</h3>
                  <p>When your next service is due, you’ll receive a reminder two weeks before just in case this essential maintenance has slipped your mind.</p>
                </div>
              </div>
            </div>


          </div>

        </div>        




        <div class="container faq-section py-5">

          <div class="row text-center pb-4 pt-4">
            <h2>Frequently <span class="font-bold">Asked Questions.</span> </h2>
          </div>

          <div class="accordion mt-4 mb-5" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Why do I need a boiler service?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    An annual boiler service can increase efficiency, reliability, and will reduce the chance of carbon monoxide poisoning.<br/><br/>
                    Is your boiler under warranty? If you don’t have it checked annually there’s a chance your warranty will become void.
                    Landlords listen up, we offer an annual service as well as a gas safety inspection to cover your LGSR - we've got you covered. 
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What’s involved in a boiler service?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    To ensure that your boiler is performing as efficiently and as safely as possible we will always carry out these checks:
                    <ul>
                      <li>Checking for dangerous carbon monoxide leaks</li>
                      <li>Checking controls are working</li>
                      <li>Gas rate and pressure tests</li>
                      <li>Inspection of internal components</li>
                      <li>Combustion test using a flue analyser</li>
                      <li>Checking safety devices</li>
                      <li>Inspection of water and gas pipework</li>
                      <li>Inspection of electrical connections and seals</li>
                      <li>Identifying any corrosion or leaks</li>
                      <li>Cleaning boiler parts</li>
                    </ul>
                   </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How long does it take to complete a boiler service?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    On average it should take between 30-60 minutes to carry out a service. If any problems are found, and repairs are required it can take a little bit longer, but we would always let you know exactly what is happening.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Can any plumber carry out a boiler service?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    No, they can’t.
                    Not all plumbers are qualified to work with gas appliances. If you ask someone to carry out work on a gas appliance they should be Gas Safe Registered. You can ask to see their gas safe I.D. card, or visit www.gassaferegister.co.uk/ to check their details.

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      
      <ContactForm />

      </main>
    </Layout>
  )
}

export default BoilerServicing