import React from 'react'



import Layout from "../../components/layout2"
import Seo from "../../components/seo"

export default function ServicesPage() {
  return (
          <Layout>
        <Seo title="Our Services | Formal Flamingo - Web Design & Development in Palm Bay, Florida
" />
   <section className="light-back2">
   <h1>Our Web Design & Development Services</h1> 

<p>At Formal Flamingo, we offer a comprehensive suite of web design and development services to help businesses in Palm Bay, Florida, grow their online presence. Explore our range of services tailored to meet your unique needs.
</p>
<div  style={{display: "flex", flexWrap: "wrap", marginTop: "5rem"}}>




<div className='service-card'>
  <div>
<h3>Web Design</h3> 
<p>We create visually captivating and user-friendly websites that engage your audience and drive business growth. Learn more about our custom web design solutions for businesses in Palm Bay, Florida.
</p>
</div>
<div className="btn-margin" >
<a className="more-info-link" href="/services/web-design">Learn More About Web Design</a>
</div>
</div>

<div className='service-card'>
  <div>
<h3> Web Development</h3>
<p>Our skilled developers build custom websites and applications to help you achieve your business objectives. Discover how our web development services can elevate your online presence.</p>
</div>
<div className="btn-margin" >
<a className="more-info-link" href="/services/web-development">Learn More About Web Development</a>
</div>
</div>

<div className='service-card'>
  <div>
<h3>  E-commerce Solutions</h3> 
<p>Boost your online sales with our custom e-commerce platforms designed to provide a seamless shopping experience for your customers. Explore our e-commerce development services.</p>
</div>
<div className="btn-margin" >
<a className="more-info-link" href="/services/">Learn More About E-Commerce Solutions</a>
</div>
</div>



<div className='service-card'>
  <div>
<h3>  Web Application Development</h3> 
<p>Streamline your business processes with our powerful web applications tailored to your specific needs. Learn more about our web application development services.</p>
</div>
<div className="btn-margin" >
<a className="more-info-link" href="/services/">Learn More About Web Application Development</a>
</div>
</div>

<div className='service-card'>
  <div>
<h3>  Content Management Systems</h3> 
<p>Easily manage and update your website with our custom content management system solutions. Find out more about our CMS development services.</p>
</div>
<div className="btn-margin" >
<a className="more-info-link" href="/services/">Learn More About Content Management</a>
</div>
</div>
<div className='service-card'>
<div>
<h3> Search Engine Optimization</h3> 
<p>Improve your website's search engine visibility and attract more organic traffic with our SEO services. Learn more about our search engine optimization strategies.</p>
</div>
<div className="btn-margin" >
<a className="more-info-link" href="/services/">Learn More About SEO</a>
</div>
</div>


</div>

<p>At Your Agency Name, we're dedicated to delivering exceptional web design and development services that drive results for businesses in Palm Bay, Florida. Get in touch with our team today to discuss your project and learn how we can help your business succeed online.</p>
  
</section>
</Layout>
  )
}
