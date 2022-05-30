import React, { useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { StaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";
import BlackPrevArrow from "../../images/prev_black.svg";
import BlackNextArrow from "../../images/next_black.svg";
import "../BoilerScroller/boiler-scroller.css"

// export const boilerQuery = graphql`
//   query {
//     allStrapiBoiler(filter: {}, sort: {fields: strapi_id, order: ASC}) {
//       edges {
//         node {
//           id
//           Name
//           Price
//           strapi_id
//           Image {
//             alternativeText
//             localFile {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `

const BoilerScroller = () => {


  const slider = useRef();
   
  const next = () => {
   slider.current.slickNext();
 };
  const previous = () => {
   slider.current.slickPrev();
 }; 

 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
 };

          
          

 return (

        <div class="container text-center pb-5 pt-5">
          <h2>Choose the right boiler <span class="font-bold">for your budget.</span> </h2>
          <p>Find the right fit for the right place!</p>


          <Slider ref={(c) => (slider.current = c)} {...settings}>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Popular</span></div>
                  <StaticImage className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/baxi_boiler.png" alt="Baxi Boiler" />
                  <h4 class="boiler-text font-bold">Baxi 600 Boiler</h4>
                  <h4 class="boiler-price orange">Fitted from £1944.00</h4>
                </div>
              </div>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Amazing efficiency</span></div>
                  <StaticImage className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/baxi_boiler.png" alt="Baxi Boiler" />
                  <h4 class="boiler-text font-bold">Viessmann 100-W Boiler</h4>
                  <h4 class="boiler-price orange">Fitted from £2,305.00</h4>
                </div>
              </div>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Best value</span></div>
                  <StaticImage className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/baxi_boiler.png" alt="Baxi Boiler" />
                  <h4 class="boiler-text font-bold">Baxi 630 Gas Combi Boiler</h4>
                  <h4 class="boiler-price orange">Fitted from £1,945</h4>
                </div>
              </div>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Best value</span></div>
                  <StaticImage className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/baxi_boiler.png" alt="Baxi Boiler" />
                  <h4 class="boiler-text font-bold">Baxi 630 Gas Combi Boiler</h4>
                  <h4 class="boiler-price orange">Fitted from £1,945</h4>
                </div>
              </div>

          </Slider>

        {/* <StaticQuery
              query={boilerQuery}
                render={data => (
                  <Slider ref={(c) => (slider.current = c)} {...settings}>
                  {data.allStrapiBoiler.edges.map(boiler => (
                    <div class="slide-wrapper">
                    <div 
                    key={boiler.node.id}
                    class="slide text-center py-4">
                      <img class="boiler-image mx-auto d-inline-block" src={boiler.node.Image.localFile.url} alt={boiler.node.Image.alternativeText}/>
                      <h4 class="boiler-text font-bold">{boiler.node.Name}</h4>
                      <h4 class="boiler-price orange">{boiler.node.Price}</h4>
                    </div>
                    </div>
                  ))}
                  </Slider>
                )}
              /> */}

        


            <div class="d-flex justify-content-center mb-5">
              <button 
              onClick={previous}
              aria-label="Scroll Left"
              type="button" 
              class="slick-buttons prev-boilers d-inline">
                <img src={BlackPrevArrow} alt=""/>
              </button>
              <button 
              onClick={next}
              aria-label="Scroll Right"
              type="button" 
              class="slick-buttons next-boilers d-inline">
                <img src={BlackNextArrow} alt=""/>
              </button>
              </div>
          



          <a href="/boiler_quote_tool.html" class="btn-orange mb-5 mb-lg-0">Buy Your New Boiler</a>

        </div>

 )
}

export default BoilerScroller