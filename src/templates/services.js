import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'



export default function Services({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <section className="blog-post light-back1 flex gap-1">
          <div className="col-8">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> 
        </div>
        <div className="col-4">
          jbgj
        </div>
        </section>
        
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