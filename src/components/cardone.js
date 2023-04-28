import React from 'react'




import PropTypes from 'prop-types'



const CardOne = ({
  title,
  description,
 image, 
 alt,
 link, 
 linkName
}) => (
    <div className="main-card">
       <div>
        <h5 className="fix">{title}</h5>
       <img src={image} alt={alt}/>
        <p className='text-left'>{description}</p>
        <a href={link}>{linkName}</a>
        </div> 
        <div >

      
      </div>
          
    
    </div>


  
)

CardOne.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,

  
  
}

export default CardOne
