import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout2"
import CardOne from '../components/cardone'

import develop from '../images/develop.png'
import design from '../images/design.png'
import launch from '../images/launch.png'
import  meet from '../images/letsmeet.png'
import  content from '../images/content.png'





import Fade from 'react-reveal/Fade';
import Seo from "../components/seo"


const IndexPage = () => {
 const width = 400;
  return(
    <div>
      <Layout>
      <Seo title="Melbourne FL Web Design"
           description="Give your business a leg up with a great website. A web design and development agency in Melbourne Florida."
          />
<div className='hero-page'>
  <div className="flex" >
    <div className="col-6" >    
      <h1>Melbourne Florida<br/> Web Design</h1>     
      <h2>Give your business website a leg up with our expert design, development, seo, and branding.</h2> 
      <div className="btn-margin">
      <a className="primary-button" href="/contact/">Contact Us</a>
      </div>
    </div>
    <div className="col-6 hero-image">
   
    <StaticImage width={width} src="../images/flamingo.png" alt="a flamingo with a tophat and bowtie"/>
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
  <a className="primary-button" href="./about/">About Us</a>
  </div>
  
  </div>
  </Fade> 
</div>
</section>

<section className="card-container">
  <h3 style={{marginBottom: "5px"}}>Our Web design & Development Process</h3>
<div className="flex justify-center" style={{margin: "50px 0", flexWrap: "wrap"}}>
<CardOne
title="Discovery Session"
description="Learn how a new website can help your business and decide how to proceed."
image= {meet}
alt="web development"

/>
<CardOne
title="Write Content"
description="Create custom images and content to let customers know what your business is all about."
image= {content}
alt="web development"
/>
<CardOne
title="Website Design"
description="Beautiful design that helps create leads and directs customers to where you want them "
image= {design}
alt="web development"
/>
<CardOne
title="Develop Website"
description="Our goal is to create a dynamic UI/UX experience with search engines in mind. "
image= {develop}
alt="web development"
/>
<CardOne
title="Launch"
description="Your website is live, take over control and start building your business online. "
image= {launch}
alt="web development"
/>
</div>

<div className="btn-margin">
<a className="primary-button" href="./contact/">Find out what else we do.</a>
</div>
</section>

<section className="two-panel light-back2">
<Fade left>
  <h3 className="text-center" >No one like a slow website. Check out our speed.</h3>
  <div className="flex btn-margin">
    <div className="col-6">
      <h5>Our websites are developed to be the fastest possible so less customers leave before loading</h5>
      <p>By leaveraging static site generation our sites do not need to access information from a server prior to build making load time much faster without loosing any functionality. In other words we use tech stuff to your website kick ass.</p>

    </div>
    <div className="col-6">
     <StaticImage src="../images/racecar.png" alt="flamingo driving a car"/>
      
    </div>
  </div>
  </Fade>
</section>



<section className="two-panel back">
<h3>Manage your own content</h3> 
  <div className="flex btn-margin">
  <div className="col-6">
     <StaticImage src="../images/customizeyourcontent.png" alt="content management system "/>
      
    </div>
    <div className="col-6">
    <h5 >Does your content change a lot? </h5>
      <p>Whether you are adding a blog to promote your website, or just need to update a few things we offer content management. We use a headless content management system. That means that we can install the functionality of sites powered by WordPress or Drupal but still be faster, unique, and more secure.</p>

    </div>
  
  </div>

</section>
<section className="hero-about light-back2">
<h3>Get your content listed on Google</h3>
<div className="flex margin-top">

  <div className="col-6 text-left ">
    <div className="space">
<h5>Make sure that your site is found by your customers.</h5>
<p>All our websites come with technical SEO, profesional analytics, and listing on popular seach engines. </p>
</div>

 <div className="btn-margin" >
   
 <a className="primary-button" href="./about/">About Us</a> 
 </div>
  </div>
  <div className="col-6">
<StaticImage src="../images/seo.png" alt="man building a website design"/>
  </div>
</div>
</section>


    </Layout>
    </div>
  )
}

export default IndexPage
