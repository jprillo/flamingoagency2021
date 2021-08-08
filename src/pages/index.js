import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout2"
import CardOne from '../components/cardone'

import free from "../images/jason.png"





import Fade from 'react-reveal/Fade';
import Seo from "../components/seo"


const IndexPage = () => {
 
  return(
    <div>
      <Layout>
      <Seo title="Melbourne FL Web Design"
           description="Give your business a leg up with a great website. A web design and development agency in Melbourne Florida."
          />
<div className='hero-page'>
  <div className="flex">
    <div className="col-6">    
      <h1>Melbourne Florida<br/> Web Design</h1>     
      <h2>Give your business website a leg up with our expert design, development, seo, and branding.</h2> 
      <div className="btn-margin">
      <a className="primary-button" href="/contact/">Contact Us</a>
      </div>
    </div>
    <div className="col-6 hero-image">
   
    <StaticImage src="../images/flamingo-illustration.png" alt="a flamingo with a tophat and bowtie"/>
    </div>
  </div>  
  </div>
  


  <section className="hero-about light-back2">
<h3>CREATIVE, RELIABEL, & HONEST<br/>
<span className="secondary-font">Business Web Solutions in Space Coast Florida</span> </h3>
<div className="flex margin-top">
  <Fade left>
  <div className="col-6 hero-image">
<StaticImage src="../images/spacecoast.png" alt="Creatures building and designing a website"/>
  </div>  
  </Fade>
  <Fade right>
  <div className="col-6 text-left ">
  <p>We aim to develop the best business websites and applications in the Melbourne Florida area. 
Our garuntee is to tell you exactly what you can expect and deliver on time without any hidden fees or broken promises. </p>

 <div className="btn-margin">
  <a className="primary-button" href="./contact/">Contact Us</a>
  </div>
  
  </div>
  </Fade> 
</div>
</section>

<section className="card-container">
  <h3>Our Web design & Development Process</h3>
<div className="flex justify-center" style={{margin: "50px 0"}}>
<CardOne
title="Free Consultation"
description="Find out what you need and propose a custom solution"
image= {free}
alt="free"
/>
<CardOne
title="Free Consultation"
description="Find out what you need and propose a custom solution"
image= {free}
alt="free"
/>
<CardOne
title="Free Consultation"
description="Find out what you need and propose a custom solution"
image= {free}
alt="free"
/>
</div>

<div className="btn-margin">
<a className="primary-button" href="./contact/">Find out what else we do.</a>
</div>
</section>

<section className="two-panel light-back2">
<Fade left>
  <h3 className="text-center" >No one likes a slow website. Our websites are fast so less customers leave before loading</h3>
  <div className="flex btn-margin">
    <div className="col-6">
      <p>Our websites are fast. Faster websites are a better experience for your users and lead to fewer people bouncing. Search engines like it when people get what they need from your site and don't leave because of slow load times. This is especially important for mobile users of your website. </p>

    </div>
    <div className="col-6">
     <StaticImage src="../images/flamingo-car.svg" alt="flamingo driving a car"/>
      
    </div>
  </div>
  </Fade>
</section>



<section className="two-panel back">
  
  <div className="flex btn-margin">
  <div className="col-6">
     <StaticImage src="../images/boy-on-computer.svg" alt="content management system "/>
      
    </div>
    <div className="col-6">
    <h5 >Does your content change a lot? </h5>
      <p>Whether you are adding a blog to promote your website, or just need to update a few things we offer content management. We use a headless content management system. That means that we can install the functionality of sites powered by WordPress or Drupal but still be faster, unique, and more secure.</p>

    </div>
  
  </div>

</section>
<section className="hero-about light-back2">
<h3>Is your website performing the way you want?</h3>
<div className="flex margin-top">

  <div className="col-6 text-left ">
    <div className="space">
<h5>Ask us how we can help.</h5>
<p>If your website is old you may not be taking advantage of the latest trends and technology. Contact us and we will show you where your current website could be better and how it could affect meeting your goals. </p>
</div>

 <div className="btn-margin" >
   
 <a className="primary-button" href="./about/">About Us</a> 
 </div>
  </div>
  <div className="col-6">
<StaticImage src="../images/boy-on-computer.svg" alt="man building a website design"/>
  </div>
</div>
</section>


    </Layout>
    </div>
  )
}

export default IndexPage
