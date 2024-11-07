import React, { useState } from 'react'
import '../style.css'

interface SeatType{
  number: string,
  handlechair:(data : string)=>void
  bgcolor: string,
  selected:boolean
}

export default function SeatBoxes({number,handlechair,bgcolor,selected} : SeatType) {

  const [bluecolor,setbluecolor] = useState<string | any>()
  const  [fontcolor,setfontcolor] = useState<string | any>()
  const [flag ,setflag] = useState(true)

  const handlecolor = (elem : React.MouseEvent<HTMLDivElement>)=>{
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
