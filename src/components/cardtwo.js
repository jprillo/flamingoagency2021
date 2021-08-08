import React from 'react'

import PropTypes from 'prop-types'



const CardTwo = ({
  title,
  description,
  image, 
  alt,
  
 
}) => (
    <div className="main-card">
<div>
<img  src={image} alt={alt} />
        
        <h5 className="fix" >{title}</h5>
        <p>{description}</p>
        </div>
        <div >
        
        </div>
       
          
    
    </div>


  
)

CardTwo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,

  
  
}

export default CardTwo
