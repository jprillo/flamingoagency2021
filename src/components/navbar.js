
  import React from "react"
  import {Link} from "gatsby"
  import { ThemeToggler } from 'gatsby-plugin-dark-mode'

  const activeStyle = {
      color: '#FF6AB2',
      
    }
  
  
  const NavBar = ({ toggleNavbar, isActive }) => {    
      return(
          <div className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}> 
  
              <div id="main-nav-wrap">
                  <div className="logo-wrap">
                      <Link to="/">
                    <span className="formal" >Formal</span><span className="primary-color">Flamingo</span> </Link>
  
                  </div>
                  
                  <div >
       
                      
                   
                  </div>
      <div style={{display: "flex"}}> 
      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                                     <li><Link className="hack" activeStyle={activeStyle} to="/">Home</Link></li>
                              <li><Link to="/about/" activeStyle={activeStyle} className="hack">About</Link></li>
                              <li><Link to="/services/" activeStyle={activeStyle} className="hack">Services</Link></li>
                           
                              <li><Link to="/contact/" activeStyle={activeStyle} className="hack">Contact</Link></li>                     
                       
  
                            
                          </ul>
                      </div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
           
          
           <div className="container">
           <label>
             <div className="switch">
               <input
                 className="checkbox"
                 type="checkbox"
                 onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                 checked={theme === 'dark'}
               />
               <span className="checkmark"></span>
             </div>
           </label>
         </div>
        )}
      </ThemeToggler> 
      
                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}
              
              data-target='nav-menu'
              onClick={toggleNavbar}
              aria-hidden={true}>
                          <span className="line line01"></span>
                          <span className="line line02"></span>
                          <span className="line line03"></span>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
  
      )
  }
  export default NavBar
