import React from "react"
import "../ProcessSection/process-section.css"
import Process1 from "../../images/process_1.svg"
import Process2 from "../../images/process_2.svg"
import Process3 from "../../images/process_3.svg"
import Process4 from "../../images/process_4.svg"

const ProcessSection = () => {     
         
 return (
  <div class="container-fluid text-center process-section">
  <div class="container pt-3 pb-5">
    <div class="row py-5 pb-4">
      <h2>How it <span class="font-bold">all works.</span> </h2>
      <p>Arranging an installation couldn't be easier!</p>
    </div>
    <div class="row pb-4">
      <div class="col-12 col-md-6 col-lg-3 pb-3 pb-lg-0">
        <img class="pb-4" src={Process1} alt="Number 1"/>
        <h3 class="font-bold">Answer some questions</h3>
        <p>All you need to do is answer some simple questions about your home and current heating system</p>
      </div>
      <div class="col-12 col-md-6 col-lg-3 pb-3 pb-lg-0">
        <img class="pb-4" src={Process2} alt="Number 1"/>
        <h3 class="font-bold">View your options</h3>
        <p>With this information we can show you a selection of boilers that will be perfect for your home.</p>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <img class="pb-4" src={Process3} alt="Number 1"/>
        <h3 class="font-bold">Choose a package</h3>
        <p>Choose one of our recommended packages, and we will arrange a free survey to ensure you are happy with your choice.</p>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <img class="pb-4" src={Process4} alt="Number 1"/>
        <h3 class="font-bold">Your installation</h3>
        <p>We will schedule an installation date to suit you. It’s as simple as that.</p>
      </div>
    </div>
    <a href="/" class="btn-orange-outline mb-5">Get Started Now</a>
  </div>
</div>
 )

}

export default ProcessSection