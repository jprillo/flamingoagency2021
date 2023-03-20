import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout2"
import CardOne from '../components/cardone'

import develop from '../images/develop.png'
import design from '../images/design.png'
import launch from '../images/launch.png'
import  meet from '../images/letsmeet.png'
import  content from '../images/content.png'

import space from '../images/spacecoast.png'
import ricky from '../images/customizeyourcontent.png'
import seoimage from '../images/seo.png'




import Fade from 'react-reveal/Fade';
import Seo from "../components/seo"


const IndexPage = () => {
 
  return(
    <div>
      <Layout>
      <Seo title="Palm Bay FL Web Design"
           description="Give your business a leg up with a great website. A web design and development agency in Melbourne Florida."
          />
<div className='hero-page'>
  <div className="flex gap-2" style={{alignItems: "center"}}>
    <div className="col-7" >    
      <h1>Web Development Services in Palm Bay, FL</h1>     
      <h2 style={{paddingRight: "5rem"}}>Give your business website a leg up with our expert design, development, seo, and branding.</h2> 
      <div  style={{marginTop: "3.5rem"}}>
      <a className="primary-button" href="/contact/">Contact Us</a>
      </div>
    </div>
    <div className="col-5 hero-image">
   
    <StaticImage  src="../images/flamingo.png" alt="a flamingo with a tophat and bowtie"/>
    </div>
  </div>  
  </div>
  


  <section className="light-back2">

<div className="flex pad-top gap-1">
 
  <div className="col-6">
<img width="100%" src= {space} alt="Creatures building and designing a website"/>
  </div>  
 
 
  <div className="col-6 text-left " style={{display: "flex", flexDirection: "column"}}>
 
<div>
<h2 style={{padding: "0",}}>
Unlock Your Online Potential</h2><h3>Honest, Reliable, and Creative Web Solutions in Palm Bay, Florida</h3>
  <p>We specialize in website design and development, with a focus on responsive design and user experience. Our process is collaborative and transparent, ensuring that you are involved in every step of the development process. We'll take your vision and make it a reality, creating a unique and vibrant online presence for your business. </p>


</div>
<div  style={{marginTop: "3.5rem"}}>
      <a className="primary-button" href="/about/">About Us</a>
      </div>
  </div>
</div>
</section>

<section className="card-container">
  <div className="col-6 text-left"><h3 style={{marginBottom: "5px"}}>Our Web Design & Development Process</h3></div>
  
<div className="flex " style={{margin: "50px 0", flexWrap: "wrap", gap: "2vw"}}>
<CardOne
title="Discovery Session"
description=" Our team will collaborate with you to comprehend your business, objectives, and website vision. We'll analyze your intended audience, essential features, and necessary functionality. "
image= {meet}
alt="web development"

/>
<CardOne
title="Create Content"
description=" Writing, editing, and formatting high-quality, relevant, and engaging content and custom images can help convey your brand's personality and differentiate you from competitors."
image= {content}
alt="web development"
/>
<CardOne
title="Website Design"
description="Selecting colors, fonts, images, and other design elements that will be used throughout the website. Additionally, we ensure that the website is user-friendly, visually appealing, and accessible on multiple devices and browsers. "
image= {design}
alt="web development"
/>
<CardOne
title="Develop Website"
description="This is where we build the website's functionality and features. Our main focus is to make sure the website works well on different devices and is easy to find on search engines.  "
image= {develop}
alt="web development"
/>
<CardOne
title="Launch"
description="Your website is live. After a quick tutorial you are ready to take over control and start building your business online. "
image= {launch}
alt="web development"
/>
</div>

<div className="btn-margin">
<a className="primary-button" href="./contact/">Learn More</a>
</div>
</section>

<section className=" light-back2">
<Fade left>

  <div className="flex  gap-1 align-center">
    <div className="col-6 text-left">
    <h3 className="text-left" >Our Websites Load Fast</h3>
      <p>Having a fast website keeps visitors engaged. We prioritize the development of lightning-fast websites that minimizes the likelihood of potential customers leaving before the site fully loads.</p>

<p>To achieve this, we utilize static site generation technology. This enables our sites to build without the need for accessing information from a server, resulting in significantly faster load times without compromising on functionality.</p>
     
    </div>
    <div className="col-6">
     <StaticImage src="../images/racecar.png" alt="flamingo driving a car"/>
      
    </div>
  </div>
  </Fade>
</section>



<section className=" back">

  <div className="flex gap-1 align-center" >
  <div className="col-6">
     <img width="100%" src= {ricky} alt="content management system "/>
      
    </div>
    <div className="col-6 text-left">
    <h3>Manage your own content</h3> 
   
      <p>Are you frequently making updates to your website's content?</p><p> Whether you need to add a blog to promote your business or make other changes, we offer reliable and efficient content management services.

Our approach involves utilizing a headless content management system that offers a range of benefits. Specifically, we are able to install the same robust functionalities available on popular content management platforms like WordPress or Drupal, but with improved speed, unique design options, and enhanced security.</p>

    </div>
  
  </div>

</section>
<section className="hero-about light-back2">

<div className="flex margin-top gap-1 align-center ">

  <div className="col-6 text-left ">
    <div>
    <h3>Search Engine Optimization</h3>

<p>It is essential to ensure that your website is easily discoverable by your target audience. We prioritize effective search engine optimization (SEO) strategies to maximize your online visibility.</p><p>

All of our websites come with advanced technical SEO, as well as professional analytics tools to provide insight into your website's performance. Additionally, we take the necessary steps to ensure that your website is listed on popular search engines, further increasing the likelihood of your site being found by potential customers.</p>
</div>

 <div style={{marginTop: "3.5rem"}} >
   
 <a className="primary-button" href="./about/">About Us</a> 
 </div>
  </div>
  <div className="col-6">
  <img width="100%" src= {seoimage} alt="Creatures building and designing a website"/>
  </div>
</div>
</section>


    </Layout>
    </div>
  )
}

export default IndexPage
