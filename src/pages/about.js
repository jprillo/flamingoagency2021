import React from "react"
import Layout from "../components/layout2"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../style/main.scss"
import Seo from "../components/seo"




const AboutPage = () => {    
    return(
  
        <div>
           <Layout>
           <Seo title="About Us"
           description="We are a web design agency in Melbourne Florida specializing in building fast, modern, and original websites. "
          />
            <div className='hero-page'>
  <div className="flex gap-2" style={{alignItems: "center"}}>
    <div className="col-7" >    
      <h1>About Us</h1>     
      <h2 style={{paddingRight: "5rem"}}>We are a digital marketing and agency dedicated to creating awesome websites for entreprenuers and bloggers.</h2> 
      <div  style={{marginTop: "3.5rem"}}>
      <a className="primary-button" href="/contact/">Contact Us</a>
      </div>
    </div>
    <div className="col-5 hero-image">
   

    </div>
  </div>  
  </div>


  <section className="light-back2">
      <h3>Meet Our Team.</h3>
      <div className="flex add-pad">
      
        <div className="col-6 align-center about-pad">
        <StaticImage  src="../images/jason.png" alt="Jason Prillo is the owner of Formal Flamingo"/>
          </div>
          <div className="col-6">
        <h5>Jason Prillo</h5>
        <p style={{color: "#FF6AB2"}}>Developer</p>
        <p>Jason started Formal Flamingo in 2016.</p>
        
        <p> Jason likes Javascript and Table Tennis. </p>
           
        </div>
      </div>

      <div className="flex reverse add-pad">

      <div className="col-6">
      <h5>Sara Perno</h5>
      <p style={{color: "#FF6AB2"}}>Designer</p>
      <p>Sara is a web designer from Palm Bay, Florida.</p>
      <p>Sara likes Cats and Butterflies</p>
      </div>
   
      
      <div className="col-6 align-center about-pad">
      <StaticImage  src="../images/sara.png" alt="Sara Perno is a designer for Formal Flamingo."/>
        </div>
   
        </div>
  </section>

  <div className="light-back1 banner">
    <h3>Our goal is to deliver the fastest, highest performing websites available to businesses looking for an edge online. </h3>
    <div className="btn-margin align-center" style={{marginTop: "3.5rem"}} >
      <Link className="primary-button" to="/contact/">Let's Talk</Link>
      </div>
  </div>
 


            </Layout>  
        </div>
    )
}
export default AboutPage