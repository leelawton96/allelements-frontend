import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import BoilerScroller from "../components/BoilerScroller/boiler-scroller"


const Installations = () => {
  return (
    <Layout>
      <main>
      <SEO 
        url="https://www.all-elements.co.uk"
        title="Boiler Installations | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />

      <div class="container-fluid content-bg">
          <img class="content-home-bg" src="assets/home_bg.svg" alt=""/>

          <div class="container-fluid content-header-container">
            <div class="container">
              <div class="row">
  
                <div class="col-12 my-auto text-center">
                  <h1 class="white mb-4">Boiler <span class="font-bold"> Installations</span> </h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-center  justify-content-center">
                      <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li class="breadcrumb-item"><Link to="/">Boilers & Heating</Link></li>
                      <li class="breadcrumb-item active-breadcrumb" aria-current="page">Installations</li>
                    </ol>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>




        <div class="container py-5 about-section">
          <div class="row py-5">
            <div class="col-12 col-lg-6 p-4">
              <StaticImage className="w-100" loading="lazy" src="../images/boiler_install.png" alt="Boiler Installation" />
            </div>
            <div class="col-12 col-lg-6 p-5">
              <h4 class="font-bold orange font-uppercase">do you need a new boiler?</h4>
              <h2 class="me-md-5">Top-notch boiler installations, <span class="font-bold">for all budgets.</span></h2>
              <p>Having a new boiler fitted can feel like a big commitment, but it doesn’t have to. 
                If your boiler needs regular repairs, makes strange noises, struggles to keep your home warm or is generally temperamental and prone to breaking down, then you probably need a new one.</p>
                <Link className="btn-orange mt-4" to="/boiler-quote-tool/">Get a free quote now</Link>
            </div>
          </div>
        </div>


        <div class="container-fluid cta-section d-flex py-5">

          <div class="container text-center my-auto pb-5 pt-4">


            <div class="row pb-4">
              <h2 class="white">Benefits of a  <span class="font-bold"> new boiler.</span> </h2>
              <p class="white">Your boiler is the most important part of the central heating system within your home. You should always make sure that your boiler is functioning as it should be </p>
            </div>

            <div class="row">

              <div class="col-12 col-sm-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3 install-usps-box">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon" />
                  <h3 class="font-bold">A warmer home</h3>
                  <p>Older gas boilers become less efficient over time and can struggle to provide heat. A modern boiler can create a comfortable, warm atmosphere for your home.</p>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3 install-usps-box">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon" />
                  <h3 class="font-bold">Reduce your bills</h3>
                  <p>An elderly boiler is losing you money every single day, as well as pumping extra CO² into the environment.</p>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3 install-usps-box">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon" />
                  <h3 class="font-bold">Peace of mind</h3>
                  <p>All the boilers we fit come with up to 12 years manufacturer parts and labour warranties. Which we’ll register for you! Giving you hassle free heating for years to come.</p>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-5 px-3 install-usps-box">
                  <StaticImage className="pb-4" objectFit="contain" height={50} loading="lazy" src="../images/check_icon.svg" alt="Check Icon" />
                  <h3 class="font-bold">Better control</h3>
                  <p>Combined with heating controls, new boilers allow the user to set the desired temperature. You can be far more precise with how much heat is required for each area, saving money and increasing comfort.</p>
                </div>
              </div>

            </div>


          </div>

        </div>        



      <BoilerScroller />



      <div class="container faq-section py-5">

      <div class="row text-center pb-4 pt-4">
        <h2>Frequently <span class="font-bold">Asked Questions.</span> </h2>
      </div>

      <div class="accordion mt-4 mb-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What Different Types of Boilers Are Available?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                There are a few different types of modern boilers on the market and deciding between them can be difficult.
                The boiler you’re most likely to have installed is a combi boiler. As the name suggests, these boilers combine a water heater and central heating system in one package. This means you don’t need an external water tank.<br/><br/>
                A system boiler does require an external tank. However this only stores hot water and all of the heating is carried out by the boiler itself.
                The third type of boiler you might come across is a standard boiler. These boilers need hot and cold water tanks and are usually more suited to older homes with existing heating and storage systems.

              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What is the installation process?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                On your chosen install date our Gas Safe Registered engineer will arrive to install your brand-new boiler. <br/><br/>On average installations take about a day, but it all depends on the amount of work needed and could take up to 3 days, don’t worry we’ll explain everything before we start. Our engineers will do a professional job, clean up after themselves and will even show you how to use your boiler to get the most out of it.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Will I have central heating and hot water during the installation?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                For a like for like boiler change the heating and hot water will be off for several hours, but never normally more than a day. If you are having a more complicated installation then the heating and hot water could be off for a day or two, in the event of this happening we’ll provide you with electric heaters to make sure you don’t get too cold at night.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              What happens after the installation is complete?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                After installation we’ll get in touch with your boiler's manufacturer to register your warranty. Post-installation we give you the full VIP treatment and check-in with you to ensure you're happy - if there are any issues, we’ll make sure to resolve them as quickly as possible.
                We don't just install your boiler and you never hear from us again, no we're with you for the long run. We'll even get in touch to remind you when your annual service is due, so we can guarantee your warranty stays valid - we’ve got you covered.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              What sort of guarantee will I get with my new boiler?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                Most boilers come complete with a manufacturers parts and labour warranty of between 5-10 years. On top of that, the All Elements team also provide you with our 12 month workmanship warranty.<br/><br/>
                If there are any issues with you new installation, we are only a phone call away.

              </p>  
            </div>
          </div>
        </div>
      </div>

    </div>

      </main>
    </Layout>
  )
}

export default Installations