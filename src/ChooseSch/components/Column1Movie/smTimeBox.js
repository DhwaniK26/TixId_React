import React from 'react'
import './style.css'
import { useState } from 'react'

export default function SmTimeBox({time,border,handletimePrice,price,screenname}) {

  const [bluecolor,setbluecolor] = useState()
  const  [fontcolor,setfontcolor] = useState()
  const [flag ,setflag] = useState(true)

  const handlecolor = (elem)=>{
    setflag(!flag)
    setbluecolor(flag ? " #1A2C50": "white")
    setfontcolor(flag ? 'white' : 'black')
    handletimePrice({"time":time,"screename":screenname,"price":price })
  }

  return (
    <div className='sm-timediv' onClick={handlecolor} style={{"background":bluecolor, "color":fontcolor,"border":border}}>
      {time}
    </div>
  )
}
