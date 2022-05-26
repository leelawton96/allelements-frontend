import React from "react"
import "../HomepageHero/homepage-hero.css"
import HomeBG from "../../images/home_bg.svg"
import AllElementsIcons from "../../images/all_elements_icons.png"
import BoilerImage from "../../images/header_boilers.png"
import BaxiLogo from "../../images/baxi.png"
import ViesmannLogo from "../../images/viesmann.png"
import TradeHelpLogo from "../../images/tradehelp.png"
import WorcesterLogo from "../../images/worcester_bosch.png"


const HomepageHero = () => {     
         
 return (
  <div>
         <div class="container-fluid container-background">
         <img class="home-bg" src={HomeBG} alt=""/>

         <div class="container-fluid header-container">
           <div class="container">
             <div class="row">
 
               <div class="col-lg-5 my-auto text-center text-lg-start">
                 <img class="header-icons d-block mb-4 mx-auto mx-lg-0" src={AllElementsIcons} alt="All Elements Property Services Icons"/>
                 <h1 class="white mb-4">Boiler installations for <span class="font-bold"> all budgets!</span> </h1>
                 <p class="white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                   purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                 <a href="/" class="btn-orange mb-5 mb-lg-0">Buy Your New Boiler</a>
               </div>
 
               <div class="col-lg-7 text-center text-lg-end">
                 <img class="header-image" src={BoilerImage} alt="Baxi Boilers"/>
               </div>
 
             </div>
           </div>
         </div>
       </div>

       <div class="container container-bg container-partners d-flex">
           <div class="row my-auto w-100">
             <div class="col-12 col-lg-2 py-3 py-lg-0"><img class="partner-logo" src={BaxiLogo} alt="Baxi"/></div>
             <div class="col-12 col-lg-3 py-3 py-lg-0"><img class="partner-logo" src={ViesmannLogo} alt="Viesmann"/></div>
             <div class="col-12 col-lg-3 py-3 py-lg-0"><img class="partner-logo" src={TradeHelpLogo} alt="TradeHelp"/></div>
             <div class="col-12 col-lg-4 py-3 py-lg-0"><img class="partner-logo" src={WorcesterLogo} alt="Worcester Bosch"/></div>
           </div>
       </div>

</div>
 )

}

export default HomepageHero