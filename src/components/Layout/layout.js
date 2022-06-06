import React from "react"
import Footer from "../Footer/footer"
import Navbar from "../NavBar/navbar"

const Layout = ({ children }) => {
  return (
    <div class="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>


  )
}

export default Layout