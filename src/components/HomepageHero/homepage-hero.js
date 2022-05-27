import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../HomepageHero/homepage-hero.css"


const HomepageHero = () => {     
         
 return (
  <div>
         <div class="container-fluid container-background">

         <StaticImage className="home-bg" src="../../images/home_bg.svg" alt="Home Icon Background" layout="fixed" placeholder="blurred" />

         <div class="container-fluid header-container">
           <div class="container">
             <div class="row">
 
               <div class="col-lg-5 my-auto text-center text-lg-start">
               <StaticImage 
                className="header-icons d-block mb-4 mx-auto mx-lg-0"
                src="../../images/all_elements_icons.png" 
                alt="All Elements Property Services Icons" 
                layout="fixed"
                objectFit="contain"
                height={30}
                />
                 <h1 class="white mb-4">Boiler installations for <span class="font-bold"> all budgets!</span> </h1>
                 <p class="white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                   purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                 <a href="/" class="btn-orange mb-5 mb-lg-0">Buy Your New Boiler</a>
               </div>
 
               <div class="col-lg-7 text-center text-lg-end">
               <StaticImage 
                className="header-image mx-auto"
                src="../../images/header_boilers.png" 
                alt="Baxi Boilers" 
                layout="fixed"
                objectFit="contain"
                height={450}
                />
               </div>
 
             </div>
           </div>
         </div>
       </div>

       <div class="container container-bg container-partners d-flex justify-content-around align-items-center">
       <StaticImage className="partner-logo px-2" src="../../images/baxi.png" alt="Baxi Logo" placeholder="blurred" layout="constrained" objectFit="contain" height={30} />
       <StaticImage className="partner-logo px-2" src="../../images/viesmann.png" alt="Viesmann Logo" placeholder="blurred" layout="constrained" objectFit="contain" height={30} />
       <StaticImage className="partner-logo px-2" src="../../images/tradehelp.png" alt="TradeHelp Logo" placeholder="blurred" layout="constrained" objectFit="contain" height={30} />
       <StaticImage className="partner-logo px-2" src="../../images/worcester_bosch.png" alt="Worcester Bosch Logo" placeholder="blurred" layout="constrained" objectFit="contain" height={30} />

       </div>

</div>
 )

}

export default HomepageHero