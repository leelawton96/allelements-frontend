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
          Quote="Can’t thank Chris enough for all of his hard work on my house. He repaired and serviced my boiler, and I was so impressed with his workmanship that I employed him to install my bathroom a few months later. Couldn’t be happier, I’ll definitely be using All Elements again in the future."
          Name="Laura"             
        />
        <Testimonial
          Quote="We would definitely recommend Chris. We initially found him on the gas safe register as we needed someone to install a gas hob and kitchen sink. Since then he's become our go-to person for jobs around the house. He has also serviced our boiler and repaired the toilet and dishwasher. He is always friendly, responsive and gets the job done."
          Name="Paulina"             
        />
        <Testimonial
          Quote="Great communication, very good pricing, nice and pleasant worker that is willing to give advice and help.Very tidy boiler job completed quickly and other appliances serviced."
          Name="Steve"             
        />
        <Testimonial
          Quote="I used this company again today to repair a leaking toilet as I was very happy with their boiler service a few weeks ago.  I was once again very pleased with the work and service provided- very professional, honest and helpful. Highly recommended"
          Name="Elaine"             
        />
        <Testimonial
          Quote="Have used All Elements Property Services for a few jobs I needed doing. Had a new radiator fitted and my boiler serviced by Chris, he arrived on time and got the jobs done in good time! Was very pleased with how tidy he kept things! Will be using them again for any future work needs doing!"
          Name="Craig"             
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
     aria-label="Scroll Left"
     type="button" 
     class="slick-buttons prev-boilers d-inline">
       <img src={WhitePrevArrow} alt=""/>
     </button>
     <button 
     onClick={next}
     aria-label="Scroll Right"
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


