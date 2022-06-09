import React from "react"
import { useState } from "react"
// import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Squash as Hamburger } from 'hamburger-react'
import "./navbar.css"
import DropdownIcon from "../../images/dropdown.svg"



const Navbar = () => {

  const [toggleIsOpen, toggleSetOpen] = useState(false)

  const [dropdownIsOpen, dropdownSetOpen] = useState(false)

  const handleDropdown = () => {
    dropdownSetOpen(!dropdownIsOpen)
  }

  return (

    <div class="container-fluid">
       
      <div class="container nav-container">

        <Link className="navbar-brand" to="/">
          <StaticImage 
          src="../../images/All_Elements_Logo_Dark.png" 
          alt="All Elements Logo" 
          placeholder="blurred"
          layout="constrained"
          objectFit="contain"
          height={70}
          />
        </Link>

        <Hamburger 
        className="toggler" 
        toggled={toggleIsOpen} 
        toggle={toggleSetOpen} 
        />

        <div className={toggleIsOpen?'nav-list expanded':'nav-list'}>
          <ul className="links">
            <li>
              <Link activeClassName="active" className="link" to="/">Home</Link>
            </li>
            <li>
              <span 
              className="link dropdown" 
              onClick={handleDropdown}
              onKeyDown={handleDropdown}
              role="button"
              tabIndex={0}>
              Boilers & Heating <span>
                  <img 
                  className={dropdownIsOpen?'dropdown-icon clicked':'dropdown-icon'} 
                  src={DropdownIcon} 
                  alt="dropdown menu icon"
                  />
                </span>
              </span>
              <ul className={dropdownIsOpen?'dropdown-menu open':'dropdown-menu'} >
                <li>
                <Link activeClassName="active" className="link dropdown-item" to="/installations/">Installations</Link>
                </li>
                <li>
                <Link activeClassName="active" className="link dropdown-item" to="/boiler-servicing">Boiler Servicing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link activeClassName="active" className="link" to="/other-services/">Other Services</Link>
            </li>
            <li>
              <Link activeClassName="active" className="link" to="/about/">About</Link>
            </li>
            <li>
              <Link activeClassName="active" className="link" to="/contact/">Contact</Link>
            </li>
            <li class="mt-2 my-lg-auto btn-orange ms-lg-3 ms-xl-3">
              <Link to="/boiler-quote-tool/">Buy Your New Boiler</Link>
            </li>
          </ul>
        </div>


      </div>

    </div>

  )
}


export default Navbar