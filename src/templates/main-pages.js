import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <div className="flex back">
    <div className="col-7 " style={{margin: "0 auto"}} >    
      <h1 className="align-center">{post.frontmatter.title}</h1>     
   
    </div>   
  </div>  
       
        <div className="back" style={{minHeight: "70vh"}} dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
      </div>
  
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
   
      }
    }
  }
`