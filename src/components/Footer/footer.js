import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer class="container-fluid d-flex py-4">
    <div class="container text-center my-auto">
      <p class="white py-1">Copyright © All Elements Property Services {currentYear}  |  All Rights Reserved</p>
      <p class="white py-1">Website Design by 
        <a target="_blank" rel="noreferrer" href="https://www.leelawtondesign.co.uk">  Lee Lawton</a>  |  
        <a target="_blank" rel="noreferrer" href="https://www.leelawtondesign.co.uk">  Lee Lawton Design</a> 
      </p>
    </div>
  </footer>
  )
}

export default Footer