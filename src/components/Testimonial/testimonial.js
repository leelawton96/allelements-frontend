import React from "react"
import "../Testimonial/testimonial.css"
import QuoteIcon from "../../images/quote_icon.svg"

const Testimonial = ( props ) => {     
         
 return (
  <div class="testimonial-slide-wrapper">
    <div class="text-center py-5 px-4 testimonial-container testimonial-slide">
     <img class="d-inline-block pb-3" src={QuoteIcon} alt="Testimonial Icon"/>
     <p class="pb-2">{props.Quote}</p>
     <h4 class="font-bold">{props.Name}</h4>
   </div>
  </div>
 )

}

export default Testimonial