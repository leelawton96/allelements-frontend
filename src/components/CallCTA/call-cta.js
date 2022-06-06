import React from "react"
// import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../CallCTA/call-cta.css"

const CallCTA = () => {
  return (

   <div class="container-fluid cta-section d-flex">

   <div class="container text-center pb-5 my-auto">
   
     <div class="row pt-5 pb-2">
       <h2 class="white">Need a <span class="font-bold">heating expert?</span> </h2>
       <p class="white">Our passion is to provide quality bespoke installations, and a personalised service. As a family run business with over 50 years experience, we can give you a first class package that larger companies can’t.nials from our recent projects.</p>
     </div>

     <div class="tel d-flex mb-4">
       <div class="mx-auto d-flex">
        <StaticImage className="d-inline tel-icon" src="../../images/phone.svg" alt="Phone Icon" layout="fixed"  placeholder="tracedSVG"/>
        <Link className="d-inline tel-text my-auto" to="tel:01782 901071">01782 901071</Link>
       </div>
     </div>

     <Link className="d-block mx-auto btn-white mb-5 mb-lg-0" to="/contact/">Get in Touch</Link>

   </div>

 </div>        


  )
}

export default CallCTA