import React from "react"
import NavBar from "./navbar" 
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"

class Layout extends React.Component {

  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const {  children } = this.props
   
    
    return (
      <div >    
        <header>  
                 
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
             
          </header>
        <main className="contain">{children}</main>   

        <div className="secondary-back flex align-center">
          <div className="col-6 ">
                    <h5 className="align-center">Formal Flamingo</h5>
                   <p>A web design agency in Melbourne Florida specializing in helping your business dominate the web.</p> 
          </div>

          <div className="col-6 social-media">
            <h5 className="align-center">Follow Us</h5>
            <div > 
             <a href="https://twitter.com/flamingodigital"><img alt=" pink and white twitter icon" src={twitter}></img></a>
             <a href="https://facebook.com/formalflamingo"><img alt="pink and white facebook icon" src={facebook}></img></a>
            
            </div>
            </div>
          </div>     
        <footer className="secondary-back">
         


          <a  href="https://formalflamingo.com">Formal Flamingo Web Design</a>
          © {new Date().getFullYear()}
        </footer>
      
      </div>
    )
  }
}

export default Layout
