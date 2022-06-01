import React from "react"
import "../USPSection/usp-section.css"
import CheckIcon from "../../images/check_icon.svg"

const USPSection = () => {     
         
 return (

  <div class="container-fluid text-center pb-5">
  <div class="container py-5">

    <div class="row py-4">
      <h2>Why <span class="font-bold">choose us?</span> </h2>
      <p>Arranging an installation couldn't be easier!</p>
    </div>

    <div class="row pb-5">
      <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
        <div class="container-bg py-5 px-3 container-usps">
          <img class="pb-4" src={CheckIcon} alt="Gas Safe"/>
          <h3 class="font-bold">Gas-Safe</h3>
          <p>All our boilers are installed by qualified, experienced gas-safe registered engineers.</p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
        <div class="container-bg py-5 px-3 container-usps">
          <img class="pb-4" src={CheckIcon} alt="Peace of Mind"/>
          <h3 class="font-bold">Peace of mind</h3>
          <p>For your peace of mind all installations are covered by our 12-month workmanship warranty. Any issues and we’ll be there.</p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
        <div class="container-bg py-5 px-3 container-usps">
          <img class="pb-4" src={CheckIcon} alt="Guaranteed"/>
          <h3 class="font-bold">Guaranteed</h3>
          <p>All the boilers we fit come with up to 12 years manufacturer parts and labour warranties. Which we’ll register for you! Giving you hassle free heating for years to come.</p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
        <div class="container-bg py-5 px-3 container-usps">
          <img class="pb-4" src={CheckIcon} alt="Spread the cost"/>
          <h3 class="font-bold">Spread the cost</h3>
          <p>To put a cherry on an already delicious cake, we can also offer finance for our installations. Helping to spread the cost up to 10 years*</p>
        </div>
      </div>
    </div>

    <a href="/contact.html" class="btn-orange mb-5 mb-lg-5">Get Started Now</a>

  </div>
</div>
 )

}

export default USPSection