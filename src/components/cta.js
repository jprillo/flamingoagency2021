import React from 'react'
import PropTypes from 'prop-types'




const CTA = ({
  title="Let's Work Together",
  link="/contact",
  linkText="Hire Us",

}) => {
  return( 
   <section className="secondary-back" >
    <div className="align-center">
      
   <h4>{title}</h4>
    <div className="btn-margin" >
  <a className="primary-button" href={link}>{linkText}</a>
        </div>
      </div>
      </section>
  )}

  
  CTA.propTypes = {
    title: PropTypes.string,
   linkText: PropTypes.string,
    link: PropTypes.string,
  
    
    
  }
  
  export default CTA
  