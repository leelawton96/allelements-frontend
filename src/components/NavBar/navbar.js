import React from "react"
// import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./navbar.css"

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

              <Link className="nav-link navbar-brand" to="/">
                <StaticImage 
                src="../../images/All_Elements_Logo_Dark.png" 
                alt="All Elements Logo" 
                placeholder="blurred"
                layout="constrained"
                objectFit="contain"
                height={70}
                />
              </Link>

               <div class="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul class="navbar-nav ms-lg-auto">
                   <li class="nav-item">
                    <Link activeClassName="active" className="nav-link" to="/">Home</Link>
                   </li>
                   <li class="nav-item dropdown">
                     <span class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Boilers & Heating
                     </span>
                     <ul class="dropdown-menu" id="navbarDropdownMenuLink">
                       <li><Link activeClassName="active" className="dropdown-item" to="/installations/">Installations</Link></li>
                       <li><Link  activeClassName="active" className="dropdown-item" to="/boiler-servicing/">Boiler Servicing</Link></li>
                     </ul>
                   </li>
                   <li class="nav-item">
                    <Link activeClassName="active" className="nav-link" to="/other-services/">Other Services</Link>
                   </li>
                   <li class="nav-item">
                    <Link activeClassName="active" className="nav-link" to="/about/">About</Link>
                   </li>
                   <li class="nav-item">
                    <Link activeClassName="active" className="nav-link" to="/contact/">Contact</Link>
                   </li>
                   <li class="nav-item mt-2 my-lg-auto btn-orange ms-lg-3 ms-xl-5">
                    <Link to="/boiler-quote-tool/">Buy Your New Boiler</Link>
                   </li>
                 </ul>
               </div>

           </nav>


         </div>

          <script>

            
          </script>

     </div>
  )
}

// document.querySelector('.second-button').addEventListener('click', function () {

//   document.querySelector('.animated-icon2').classList.toggle('open');

// });



export default Navbar