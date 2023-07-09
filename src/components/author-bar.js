import React from 'react'


export default function ArthorBar(props) {
  return (
    <div className='col-6' style={{display: "flex"}}>

        <div>
            <p style={{padding: "0"}}>{props.author}</p>
            <p style={{padding: "0"}}>{props.date}</p>

            </div>


    </div>
  )
}
