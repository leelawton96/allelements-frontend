import React, { useRef } from "react"
import "../TestimonialScroller/testimonial-scroller.css"
import Testimonial from "../Testimonial/testimonial";
// import { StaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";
import WhitePrevArrow from "../../images/prev_white.svg";
import WhiteNextArrow from "../../images/next_white.svg";
import "../BoilerScroller/boiler-scroller.css"

// const testimonialQuery = graphql`
//   query {
//    allStrapiTestimonial(sort: {fields: strapi_id}) {
//     nodes {
//       id
//       Name
//       Quote
//       strapi_id
//     }
//   }
//   }
// `

const TestimonialScroller = ( props ) => {    
 
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
 slidesToShow: 2,
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

  <div class="container-fluid testimonials-section pt-3 pb-4">

  <div class="container text-center pb-5">
  
    <div class="row pt-5">
      <h2 class="white">Dont take <span class="font-bold">our word for it.</span> </h2>
      <p class="white">Take a look at some testimonials from our recent projects.</p>
    </div>
    


    <div class="testimonials-slider-wrapper">

      <div class="testimonials-slider">


      <Slider ref={(c) => (slider.current = c)} {...settings}>

        <Testimonial
          Quote="We used Chris to deal with all our plumbing and heating during a recent house renovation. We were totally impressed by Chris, particularly his 'can do attitude. Nothing was too much trouble. We have no hesitation in recommending All Elements Property Services."
          Name="Katherine and Howard"             
        />
        <Testimonial
          Quote="We used Chris to deal with all our plumbing and heating during a recent house renovation. We were totally impressed by Chris, particularly his 'can do attitude. Nothing was too much trouble. We have no hesitation in recommending All Elements Property Services."
          Name="Katherine and Howard"             
        />
        <Testimonial
          Quote="We used Chris to deal with all our plumbing and heating during a recent house renovation. We were totally impressed by Chris, particularly his 'can do attitude. Nothing was too much trouble. We have no hesitation in recommending All Elements Property Services."
          Name="Katherine and Howard"             
        />
        <Testimonial
          Quote="We used Chris to deal with all our plumbing and heating during a recent house renovation. We were totally impressed by Chris, particularly his 'can do attitude. Nothing was too much trouble. We have no hesitation in recommending All Elements Property Services."
          Name="Katherine and Howard"             
        />

      </Slider>


       {/* <StaticQuery
        query={testimonialQuery}
          render={data => (
            <Slider ref={(c) => (slider.current = c)} {...settings}>
            {data.allStrapiTestimonial.nodes.map(boiler => (
              <Testimonial
              Quote={boiler.Quote}
              Name={boiler.Name} />
            ))}
            </Slider>
          )}
        /> */}

      </div>

    </div>



    <div class="d-flex justify-content-center mb-5">
     <button 
     onClick={previous}
     ariaLabel="Scroll Left"
     type="button" 
     class="slick-buttons prev-boilers d-inline">
       <img src={WhitePrevArrow} alt=""/>
     </button>
     <button 
     onClick={next}
     ariaLabel="Scroll Right"
     type="button" 
     class="slick-buttons next-boilers d-inline">
       <img src={WhiteNextArrow} alt=""/>
     </button>
    </div>

    <a href="/boiler_quote_tool.html" class="btn-white mb-5 mb-lg-0">Buy Your New Boiler</a>

  </div>

</div>

 )

}

export default TestimonialScroller


