import React, { useRef } from "react"
import { Link } from "gatsby";
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
                  <StaticImage objectFit="contain" className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/baxi-600-combi.png" alt="Baxi 600 Boiler" />
                  <h3 class="boiler-text font-bold">Baxi 600 Boiler</h3>
                  <h3 class="boiler-price orange">Fitted from ??1,944.00</h3>
                </div>
              </div>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Amazing efficiency</span></div>
                  <StaticImage objectFit="contain" className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/viesmann-100w.jpeg" alt="Viessmann 100-W Boiler" />
                  <h3 class="boiler-text font-bold">Viessmann 100-W Boiler</h3>
                  <h3 class="boiler-price orange">Fitted from ??2,305.00</h3>
                </div>
              </div>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Best value</span></div>
                  <StaticImage objectFit="contain" className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/Main_Eco_Compact_Combi_high_efficiency_condensing_combination_boiler1.jpg" alt="Main Eco Compact" />
                  <h3 class="boiler-text font-bold">Main Eco Compact</h3>
                  <h3 class="boiler-price orange">Fitted from ??1,655.00</h3>
                </div>
              </div>

              <div class="slide-wrapper">
                <div class="text-center py-4 slide">
                  <div><span class="boiler-tag">Best value</span></div>
                  <StaticImage objectFit="contain" className="boiler-image mx-auto d-inline-block" loading="lazy" src="../../images/baxi_830.webp" alt="Baxi 830 Boiler" />
                  <h4 class="boiler-text font-bold">Baxi 830 Boiler</h4>
                  <h4 class="boiler-price orange">Fitted from ??2,236.00</h4>
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
          


          <Link className="btn-orange mb-5 mb-lg-0" to="/boiler-quote-tool/">Get a FREE estimate</Link>

        </div>

 )
}

export default BoilerScroller