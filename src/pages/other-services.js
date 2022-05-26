import React from "react"
import Layout from "../components/Layout/layout"
import HomeBG from "../images/home_bg.svg"


const Installations = () => {
  return (
    <Layout>
      <main>

        {/* Header Image */}

        <div class="container-fluid content-bg">
          <img class="content-home-bg" src={HomeBG} alt=""/>

          <div class="container-fluid content-header-container">
            <div class="container">
              <div class="row">

                <div class="col-12 my-auto text-center">
                  <h1 class="white mb-4">About <span class="font-bold">All Elements.</span> </h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-center  justify-content-center">
                      <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                      <li class="breadcrumb-item active-breadcrumb" aria-current="page">About</li>
                    </ol>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  )
}

export default Installations