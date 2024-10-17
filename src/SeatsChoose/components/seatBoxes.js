import React, { useState } from 'react'
import '../style.css'

export default function SeatBoxes({number,handlechair}) {

  const [bluecolor,setbluecolor] = useState()
  const  [fontcolor,setfontcolor] = useState()
  const [flag ,setflag] = useState(true)

  const handlecolor = (elem)=>{
    setflag(!flag)
    setbluecolor(flag ? " #118EEA": "white")
    setfontcolor(flag ? 'white' : 'black')
    handlechair(number)
  }

  return (
    <div className='small-seatdiv' onClick={handlecolor}
     style={{"background":bluecolor, "color": fontcolor}}>
      {number + " "}
    </div>
  )
}
