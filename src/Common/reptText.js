import React from 'react'
import './style.css'

export default function ReptText({seattype,price,X,fontWeight}) {
  return (
       <div className='reptText' style={{ fontWeight: fontWeight }}>
          <p>{seattype}</p>
          {/* <p>{price }<span>{X}</span></p> */}
          <div>
            <p>{price}</p>
            {X && <p style={{fontWeight: "500", marginLeft: '20px'}}>{X}</p>}
          </div>
       </div>
  )
}
