import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../style/main.scss"
import Seo from "../components/seo"




const AboutPage = () => {    
    return(
  
        <div>
           <Layout>
           <Seo title="Our Mission"
           description="At our digital marketing agency, we specialize in developing exceptional websites for entrepreneurs and bloggers. Our team of experts is dedicated to creating tailored solutions that not only meet your needs but also exceed your expectations. Whether you need a brand-new website or want to revamp your existing one, we have the skills and expertise to help you achieve your online goals. Let us help you create an impressive online presence that drives traffic and boosts your bottom line. "
          />
            <div className='hero-page'>
  <div className="flex gap-2" style={{alignItems: "center"}}>
    <div className="col-6" >    
      <h1>Our Mission</h1>     
      <h2 style={{paddingRight: "5rem"}}>At our digital marketing agency, we specialize in developing exceptional websites for entrepreneurs and bloggers. Our team of experts is dedicated to creating tailored solutions that not only meet your needs but also exceed your expectations.</h2> 
      <div  style={{marginTop: "3.5rem"}}>
      <a className="primary-button" href="/contact/">Contact Us</a>
      </div>
    </div>
    <div className="col-6 hero-image">
   
    <StaticImage  src="../images/agency.png" alt="Jason Prillo is the owner of Formal Flamingo"/>
    </div>
  </div>  
  </div>


  <section className="light-back2">
      <h3>Meet Our Team.</h3>
      <div className="flex add-pad" >
      
        <div className="col-6 align-center ">
        <StaticImage  src="../images/jason.png" alt="Jason Prillo is the owner of Formal Flamingo"/>
          </div>
          <div className="col-6">
        <h5>Jason Prillo</h5>
        <h2>Developer</h2>
        <p>Jason started Formal Flamingo in 2016. He specializes in using Javascript, CSS, and HTML to make website come alive.
        
         Jason likes Gardening and Table Tennis. </p>
           
        </div>
      </div>

      <div className="flex reverse add-pad">

      <div className="col-6">
      <h5>Sara Perno</h5>
      <h2>Designer</h2>
      <p>Sara is a web designer from Palm Bay, Florida.
     Sara likes Cats and Butterflies</p>
      </div>
   
      
      <div className="col-6 align-center about-pad">
      <StaticImage  src="../images/sara.png" alt="Sara Perno is a designer for Formal Flamingo."/>
        </div>
   
        </div>
  </section>

  <div className="light-back1 banner">
    <h3>Our goal is to deliver the fastest, highest performing websites available to businesses looking for an edge online. </h3>
    <p> Whether you need a brand-new website or want to revamp your existing one, we have the skills and expertise to help you achieve your online goals.</p>
    <p> Let us help you create an impressive online presence that drives traffic and boosts your bottom line.</p>
    <div className="btn-margin align-center" >
      <Link className="primary-button" to="/contact/">Let's Talk</Link>
      </div>
  </div>
 


            </Layout>  
        </div>
    )
}
export default AboutPage