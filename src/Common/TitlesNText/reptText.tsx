import React from 'react'
import '../style.css'

interface Myreptxt{
  seattype?: string;
  price?:string;
  X?: string | null;
  fontWeight?:number
}

export default function ReptText({seattype,price,X,fontWeight} : Myreptxt) {
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
