import React from "react"
// import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import "./navbar.css"
import NavLogo from "../../images/All_Elements_Logo_Dark.png"

// const query = graphql`
//   query {
//     allStrapiGlobal {
//       nodes {
//         siteLogo {
//            localFile {
//               url
//             }
//         }
//       }
//     }
//   }
// `;

const Navbar = () => {
  return (

         <div class="container-fluid">
         <div class="container">


           <nav class="navbar navbar-expand-lg navbar-light">

             <button class="navbar-toggler second-button" type="button" data-bs-toggle="collapse"
             data-bs-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown" aria-expanded="false"
             aria-label="Toggle navigation">
             <div class="animated-icon2"><span></span><span></span><span></span><span></span></div>
             </button>

             {/* <StaticQuery
              query={query}
                render={data => (
                  <Link className="nav-link" to="/home/">
                    <img src={data.allStrapiGlobal.nodes[0].siteLogo.localFile.url} alt="All Elements Logo"/>
                  </a>
                )}
              /> */}

              <Link className="nav-link navbar-brand" to="/"><img src={NavLogo} alt="All Elements Logo"/></Link>

               <div class="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul class="navbar-nav ms-lg-auto">
                   <li class="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                   </li>
                   <li class="nav-item dropdown">
                     <span class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Boilers & Heating
                     </span>
                     <ul class="dropdown-menu" id="navbarDropdownMenuLink">
                       <li><Link className="dropdown-item" to="/installations/">Installations</Link></li>
                       <li><Link className="dropdown-item" to="/boiler-servicing/">Boiler Servicing</Link></li>
                     </ul>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="/other-services/">Other Services</a>
                   </li>
                   <li class="nav-item">
                     <Link className="nav-link" to="/about/">About</Link>
                   </li>
                   <li class="nav-item">
                   <Link className="nav-link" to="/contact/">Contact</Link>
                   </li>
                   <li class="nav-item mt-2 my-lg-auto btn-orange ms-lg-3 ms-xl-5">
                     <a href="/">Buy Your New Boiler</a>
                   </li>
                 </ul>
               </div>

           </nav>


         </div>
     </div>
  )
}

export default Navbar