import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout.js'
import ContactForm from '../components/contactForm.js'


export default function Services({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet>
      <title>{ `${post.frontmatter.title} | Services` }</title>
      <meta name="description" content={post.frontmatter.description} />
     
      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:description" content={post.frontmatter.description} />
      
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Palm Bay Web Development" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.frontmatter.title} />
      <meta name="twitter:description" content={post.frontmatter.description} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${post.frontmatter.title}",
            "description": "${post.frontmatter.description}",
        
            "author": {
              "@type": "Person",
              "name": "Jason Prillo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Palm Bay Web Development",
     
            },
           
          }
        `}
      </script>
   
    </Helmet>
        <div className="service-post light-back1 flex gap-1 ">
          <div className="col-9">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> 
        </div>
        <div className="col-3">
        
   

        </div>
        </div>
        
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
        description
  
        
      }
    }
  }
`