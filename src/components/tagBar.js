import React from 'react';
import {Link} from 'gatsby'

export default function TagBar() {
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
    <div className='tag-bar wrap' style={{display: "flex"}}>
        <Link active="active" to="/blog"   style={{ color: "black",  backgroundColor: tagColors[0]}}className='all'>All</Link>
        <Link to= "../../tags/SEO"   style={{ color: "black",  backgroundColor: tagColors[1] }}className='t1'>SEO</Link>
        <Link to= "../../tags/design"   style={{ color: "black",  backgroundColor: tagColors[2] }}className='t2'>Design</Link>
        <Link to= "../../tags/business"   style={{ color: "black",  backgroundColor: tagColors[3] }}className='t2'>Business</Link>

        </div>
  )
}

