import React from 'react'
import { Link } from 'gatsby'
import TagFlag from '../components/tagFlag'

export default function BlogArticle({
  title,
  description,
  featuredImage,
  type,
  width,
  slug,
  tag

}) {

    const usedTags = [
      "Business", "Web Design", "SEO" 
      ]
      const tagColors = [


        "#39FF14", // Neon Green
        "#4D4DFF", // Neon Blue
        "#FFFF00", // Neon Yellow
        "#FF69B4", // Neon Pink
        "#FFA500", // Neon Orange
        "#9400D3", // Neon Purple
        "#00FFFF", // Neon Cyan
        "#BFFF00", // Neon Lime
        "#FF00FF"  // Neon Magenta
      ];
    return (

        <Link to = {slug} className={width}>
        <div className= {"blog-article " + type} style={{backgroundImage:  `url('${featuredImage}')`,
      borderColor: (() => {
        switch (tag) {
          case usedTags[0]:   return tagColors[0];
          case usedTags[1]:   return tagColors[1];
          case usedTags[2]: return tagColors[2];
          case usedTags[3]: return tagColors[3];
          case usedTags[4]:  return tagColors[4];

          default:  return 'blueviolet';


        }
      })()

      }}>

        <div className="column">

              <TagFlag
         tag = {tag}
         color1 = {tagColors[0]}
         color2 = {tagColors[1]}
         color3 = {tagColors[2]}
         color4 = {tagColors[3]}
         color5 = {tagColors[4]}
         tag1 = {usedTags[0]}
         tag2 = {usedTags[1]}
         tag3 = {usedTags[2]}
         tag4 = {usedTags[3]}
         tag5 = {usedTags[4]}


         />
         </div>

            <h1>{title}</h1>
            <p>{description}</p>


        </div>
        </Link>

    )
}
