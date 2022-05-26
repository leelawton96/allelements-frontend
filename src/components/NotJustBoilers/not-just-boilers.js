import React from "react"
import "../Testimonial/testimonial.css"
import GasEngineer from "../../images/gas_engineer.png"
import Family from "../../images/family.png"

const NotJustBoilers = () => {     
         
 return (
  <div class="container-fluid text-center">
  <div class="container py-5">

    <div class="row pb-4">
      <h2>Not <span class="font-bold">just boilers.</span> </h2>
      <p>Whilst we are experts at installing new boilers, that’s not all we do.</p>
    </div>

    <div class="row pb-5">

      <div class="col-12 col-md-6 pb-4 pb-lg-0">
        <div class="container-image-bg">
          <img class="pb-4 container-image-top" src={GasEngineer} alt="Gas Engineer"/>
          <div class="container container-text px-4 py-3 pb-5">
            <h3 class="mb-4">We’re here for the <span class="font-bold">long haul.</span></h3>
            <p class="mb-4">Annual servicing of gas appliances vital to their continued efficiency and safety.</p>
            <p class="mb-5">New boilers also require an annual check up as part of the warranty T&Cs, so we’ll make sure you’re covered.</p>
            <a href="/about.html" class="btn-orange">Find out more</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 pb-4 pb-lg-0">
        <div class="container-image-bg">
          <img class="pb-4 container-image-top" src={Family} alt="Family"/>
          <div class="container container-text px-5 py-3 pb-5">
            <h3 class="mb-4">We’ll get your boiler <span class="font-bold">back up and running.</span></h3>
            <p class="mb-5">If your current boiler/heating system needs a little TLC to bring it back to life, our skilled engineers can find and fix the issue. <br/><br/> With access to next day spares *, we can soon get you warm again.</p>
            <a href="/boiler_servicing.html" class="btn-orange">Find out more</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
 )

}

export default NotJustBoilers