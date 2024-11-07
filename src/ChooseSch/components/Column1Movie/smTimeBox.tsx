import React from 'react'
import './style.css'
import { useState } from 'react'


// interface TimePrice {
//   time?: string; 
//   screename?: string; 
//   price?: string; 
// }


interface SmType{
  time?: string,
  // handletimePrice?: (data: TimePrice)=>void,
  price?:string,
  screenname?:string
}


export default function SmTimeBox({time,price,screenname} : SmType):JSX.Element {

  const [bluecolor,setbluecolor] = useState <any | null>()
  const  [fontcolor,setfontcolor] = useState <any | null>()
  const [flag ,setflag] = useState(true)

  const handlecolor = ()=>{
    setflag(!flag)
    setbluecolor(flag ? " #1A2C50": "white")
    setfontcolor(flag ? 'white' : 'black')
    // handletimePrice?.({"time":time,"screename":screenname,"price":price })
  }

  return (
    <div className='sm-timediv' onClick={handlecolor} style={{"background":bluecolor, "color":fontcolor}}>
      {time}
    </div>
  )
}
