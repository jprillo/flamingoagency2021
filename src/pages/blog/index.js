import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../../components/layout"
import Seo from "../../components/seo"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
 
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <Seo title="Blog" />
        

  <section className="light-back2" >
  <div className="flex" >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link className="secondary-color col-5 blog-article" style={{backgroundImage: "url(" + node.frontmatter.featureImage + " )" }}  to={node.fields.slug}>
           <div className="overlay">

</div>
            <div style={{position: "absolute", height: "100%", width: "100%",top: "0", left: "0", color: "white"}}>           
              
              <h3 >
                
                  {title}
                
              </h3>
              <p>{node.frontmatter.description}</p>
</div>

            <div    key={node.fields.slug}>
             
              
              
              <div>
              
              </div>
          
            </div>
           
            </Link>
          )
        })}</div>

</section>
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
            description
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
