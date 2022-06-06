import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../Testimonial/testimonial.css"

const Testimonial = ( props ) => {     
         
 return (
  <div class="testimonial-slide-wrapper">
    <div class="text-center py-5 px-4 testimonial-container testimonial-slide">
    <StaticImage className="d-inline-block pb-5" layout="fixed" objectFit="contain" height={40} src="../../images/quote_icon.svg" alt="Testimonial Icon"  placeholder="tracedSVG"/>
    <p class="pb-2">{props.Quote}</p>
    <p class="name">{props.Name}</p>
   </div>
  </div>
 )

}

export default Testimonial