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
           description="At Formal Flamingo, a digital marketing agency, we are committed to crafting top-notch websites. Our proficient team is devoted to designing customized solutions that not only fulfill your requirements but go beyond your aspirations."
          />
            <div className='hero-page'>
  <div className="flex gap-2" style={{alignItems: "center"}}>
    <div className="col-7" >
      <h1>Our Mission</h1>
      <p style={{paddingRight: "5rem"}}>At Formal Flamingo Digital Marketing, we believe in the transformative power of digital presence. Our mission is to empower businesses of all sizes to thrive in the online world by crafting unique, engaging, and responsive websites that resonate with their brand identity. Leveraging cutting-edge technology and creative design, we strive to provide tailored solutions that not only enhance visibility but also foster growth and innovation.</p>

      <p style={{paddingRight: "5rem"}}>We are committed to excellence, collaboration, and sustainability, working closely with our clients to understand their needs and vision. Our team of dedicated professionals is passionate about connecting businesses with their audiences through strategic digital marketing and compelling web experiences.</p>

      <p style={{paddingRight: "5rem"}}>Your success is our success, and we are dedicated to guiding you every step of the way, from concept to completion. Join us on this exciting journey, and let's build something extraordinary together."</p>
      <div  style={{marginTop: "3.5rem"}}>

      </div>
    </div>
    <div className="col-5 hero-image">

    <StaticImage  src="../images/flamingo-agency.png" alt="Formal Flamingo is a web devlopment agency"/>
    </div>
  </div>
  </div>



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