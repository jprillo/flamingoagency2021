import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout2"
import Seo from "../components/seo"

import "../style/main.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
 
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <Seo title="Blog" />
        
<div >
  <div className="flex back">
    <div className="col-7 " style={{margin: "0 auto"}} >    
      <h1 className="align-center">Blog</h1>     
      <h2 className="align-center">Learn about our web design and development process </h2> 
    </div>   
  </div>  
  </div>
  
  <div className="flex blog-wrap light-back2" >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link className="secondary-color col-5 blog-article" style={{padding: "5px",  backgroundImage: "url(" + node.frontmatter.featureImage + " )" , backgroundRepeat: "no-repeat", backgroundPosition: "center"}}  to={node.fields.slug}>
            <div   key={node.fields.slug}>
              
              <small>{node.frontmatter.date}</small>
              
                <h3 >
                  
                    {title}
                  
                </h3>
              
              
              <div>
              
              </div>
          
            </div>
            </Link>
          )
        })}</div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            featureImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
