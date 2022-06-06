import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import HomeBG from "../images/home_bg.svg"
import CallCTA from "../components/CallCTA/call-cta"


const Installations = () => {
  return (
    <Layout>
      <main>
      <Seo 
        url="https://www.all-elements.co.uk"
        title="Other Services | All Elements Property Services"
        description="All Elements is your local, reliable heating and plumbing experts in Staffordshire & Cheshire. From boiler installations and services to bathrooms, get in touch"
      />

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



        <div class="container-fluid text-center services-pricing-container pb-5">
          <div class="container pt-3 pb-5">
            <div class="row pt-5 w-75 mx-auto">
              <h2>More than just <span class="font-bold">boiler installations.</span> </h2>
              <p class="m-0">Below are some examples of the services that we can provide. If you can’t see what it is you are looking for, get in touch and we will be happy to assist you.</p>
            </div>

            <div class="row pt-4 pt-lg-0">

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                    <StaticImage className="m-auto" src="../images/boiler_service.svg" alt="Boiler Service" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Full central heating installations</h3>
                  <p>If you are looking to upgrade your complete central heating system or install one in a property that hasn’t previously had a system fitted. We can arrange a survey to design you an efficient system, tailored to your home.</p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                    <StaticImage className="m-auto" src="../images/boiler_fault.svg" alt="Boiler Fault" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Hot water systems </h3>
                  <p>Larger homes with multiple bathrooms are more suited to stored hot water cylinders. We can advise you of exactly the type of system you need, to ensure you never have to have a cold shower again.</p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                    <StaticImage className="m-auto" src="../images/heat_fault.svg" alt="Boiler Fault" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Underfloor heating systems</h3>
                  <p>If you are looking for an efficient, less obtrusive way to heat your home (no more unsightly radiators on the walls) then we can design and install you a bespoke underfloor heating system.</p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" src="../images/emergency_plumbing.svg" alt="Emergency Plumbing" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">New builds/Extensions </h3>
                  <p>Adding a little more to your home? Or building a new home from scratch? We can add in additional radiators, relocate them, or install you a completely new system.</p>
                </div>
              </div>
              

            </div>


            <div class="row pb-5">

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" src="../images/bathroom.svg" alt="Bathroom" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Modifications to your existing system</h3>
                  <p>You don’t have to have a completely new system to make changes to you home. We can update your radiators or relocate them to a different wall if you want. </p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" src="../images/boiler_install.svg" alt="Boiler Boiler install" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">System upgrades </h3>
                  <p>From smart controls, Thermostatic radiator valves and powerflushing. There are many ways to increase the efficiency of your heating system to not only reduce your fuel bill but to also reduce your carbon footprint.</p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" src="../images/radiator.svg" alt="Bespoke Bathroom Suites" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Bespoke bathroom suites</h3>
                  <p>Our team can help to design your dream bathroom. With extensive experience designing and so many installations we’ve lost count, whatever you have in mind we can make it a reality.</p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                <div class="container-bg py-4 px-4 pricing-box">
                  <div class="circle d-flex mx-auto mb-4">
                  <StaticImage className="m-auto" src="../images/hot_water_system.svg" alt="Hot Water System" layout="fixed"  placeholder="tracedSVG"/>
                  </div>  
                  <h3 class="font-bold">Emergency call outs</h3>
                  <p>No heating, hot water or is something leaking? No matter what has happened we are here to help. Our team of experienced engineers can handle any problem.</p>
                </div>
              </div>
              

            </div>

            <Link className="btn-orange mb-5 mb-lg-5" to="/boiler-quote-tool/">Get Started Now</Link>
            
          </div>
        </div>



    <CallCTA />



<div class="container faq-section py-5">

<div class="row text-center pb-4 pt-4">
  <h2>Frequently <span class="font-bold">Asked Questions.</span> </h2>
</div>

<div class="accordion mt-4 mb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Are gas boilers going to be banned?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          Gas boilers will not be banned from 2025. However, from 2025 new build properties could be required to have low carbon heating, such as a heat pump, so they can meet the proposed Future Homes Standard, which is a set of standards that will complement the Building Regulations to ensure new homes built from 2025 will produce 75-80% less carbon emissions than homes delivered under current regulations.<br/><br/>
          There is talk that only gas boilers that are ‘hydrogen ready’, i.e., they can be adapted easily and quickly to work on a 100% hydrogen supply, will be available in the future, but there are no legislation or policy changes in place for this.<br/><br/>
          The government’s ambition is to phase out the sale of new gas boilers by 2035, although more work needs to be done on feasibility and there is not yet any legislation to commit to this date.

        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How do I bleed my radiators?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          Sometimes you may notice a cold patch at the top of your radiators, or they have started to be noisy when they are warming up. This is caused by air that has collected at the top over time and is completely normal. The air means the hot water in the radiators can’t circulate as effectively, so your home may take longer to warm up.
          However, it is very easy to get rid of this air yourself, making your heating system more energy efficient and potentially saving money on energy bills.
          Here, we explain the best way to bleed your radiators.
          <ul>
            <li>While your heating is on, feel the top of each of your radiators to check if they are warm.  Those that are cold at the top will need bleeding.</li>
            <li>Switch off your central heating, and let the radiators cool down before bleeding radiators.</li>
            <li>Look at the valve on the top of the radiator – some need a screwdriver to undo them, but for most you will need a radiator key. These are available at DIY stores</li>
            <li>Holding a cloth underneath the valve to catch any drips, slowly turn the key anticlockwise to open the radiator valve. You should hear hissing as the air escapes.</li>
            <li>When the hissing stops and water stars to come out of the valve, turn the radiator key clockwise to close the radiator valve.</li>
            <li>Repeat for all of the radiators that need bleeding.</li>
            <li>Check the pressure gauge on the front of your boiler – it should be around 1.5 Bar.  If the pressure is too low, you will need to top it up. </li>
            <li>Once you have checked the pressure, turn the heating back on and check that your radiators are now getting warm at the top.</li>
          </ul>

        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What can cause a boiler to stop working?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          Boiler leaks. One of the most common boiler issues is a boiler leak.<br/><br/>
          Hot water but no heating, Low boiler pressure, Boiler kettling, Frozen condensate pipe, Boiler not responding to thermostat, No heat or hot water, Boiler keeps switching off, are all frequent symptoms of a boiler leak.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        What to do if your boiler loses pressure?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          If you’re having problems with your boiler and have no heating or hot water — loss of water pressure might be to blame. The good news is that low pressure is easy to diagnose and, in most cases, you can fix it yourself. To help you stay calm under (low) pressure, here’s our handy guide to the most common boiler pressure problems, and their fixes.
          <ol>
            <li>What is boiler water pressure?<br/><br/>
              Your boiler heats cold water that flows around the radiators in your home. For it to operate efficiently, the water pressure needs to be stable. Pressure in most modern boilers is maintained by a 'filling loop', which connects to a cold-water pipe, which we’ll explain more about below.</li><br/>
            <li>Why has my boiler lost pressure?<br/><br/>
              There are two main reasons for a boiler to lose pressure:<br/><br/>
              Leaks<br/>
              You may have a leak somewhere in your boiler system. It could only be a small leak but, if you haven’t noticed it, it could lead to a drop in pressure. Look around your home for signs of damp patches, around pipes, radiators and the boiler itself. You should never look for leaks inside your boiler, though. Only a Gas Safe registered engineer should open it. If you do find a leak, or need to top up the water pressure regularly, give us a call and we can come and repair it.<br/><br/>
              Bleeding radiators<br/>
              If you’ve had to bleed your radiators recently, you will have probably lost some pressure. When you bleed your radiators, air is released, which lowers the pressure in your boiler system.</li><br/>
            <li>How do I check my boiler pressure?<br/><br/>
              Usually, on the front of your boiler, you’ll find a pressure gauge. If you have a physical pressure gauge, you’ll see low and high pressure indicated by red sections on the dial. On most digital gauges, you’ll see a flashing pressure reading if it is low.<br/><br/>
              If your boiler pressure reads less than 1 bar, it’s possible that you might have lost water from the system, which will need to be topped up. This is where your filling loop comes into play. If the pressure gauge on your boiler indicates high pressure (anything over 2.5 bar), this could be a result of a fault inside the boiler. We recommend having an engineer look at your boiler as this will need to be rectified. </li><br/>
            <li>Can I fix low boiler pressure myself?<br/><br/>
              Boiler pressure systems differ, so it’s always best to check the instructions, to see if you can re-pressurise it yourself. If in doubt, give us a call and we can usually talk you through  the process without the need for a visit.</li>
          </ol>
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        How long does a boiler last?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          Your boiler should last from 10 to 15 years if you have it serviced annually and maintain it properly. A new boiler will provide you with highly efficient heating and hot water; even if it is 15 years old and still working, it won’t be working so efficiently. It may be costing you more than it should. The Energy Saving Trust tell us you could save up to £315 a year on your energy bills if you replace an old inefficient gas boiler with a new boiler, controller, room thermostat and thermostatic radiator valves. <br/><br/> Here are some signs that it might be time to think about upgrading your boiler:<br/><br/>
          <ul>
            <li>Regular breakdowns and repairs.</li>
            <li>Radiators warming up slower than usual.</li>
            <li>Hot water is coming out slowly or not very hot.</li>
            <li>Your boiler is making strange noises.</li>
            <li>Your boiler keeps losing pressure. </li>
            <li>High heating bills – a sign that your boiler isn’t as efficient as it used to be.</li>
            <li>You are extending your property and the old boiler isn’t powerful enough to cope with the extra rooms.</li>
            <li>You’re selling your home – a new high efficiency boiler and controls could add value to your property. It’s a great way of getting a higher energy efficiency rating on your Energy Performance Certificate (EPC). It is also very attractive to potential buyers.</li>
            <li>Not enough hot water – perhaps your needs have changed, and a combi boiler can’t let you run more than one shower or bath at the same time. You may need a more powerful boiler or change your combi for a system boiler and hot water storage cylinder.</li>
          </ul>
          <br/>
            We understand that buying a new boiler is a big investment, so it’s essential you make the right choice when the time comes to replace it. You can use our instant quote tool or request a site visit from us if you need something more tailored.

        </p>
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