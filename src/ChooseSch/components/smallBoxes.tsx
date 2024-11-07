import React from 'react'
import '../style.css'

interface SmallType{
  date: string,
  weekday: string,
  style: {},
  handledatedata: (date : string)=>void
}

export default function SmallBoxes({date, weekday, style, handledatedata} : SmallType) {
  
  const sendata = ()=>{
    handledatedata(date + " " +weekday)
  }

  return (
    <div className='smallbox' style={style} onClick={sendata}>
      <p>{date}</p>
      <h3>{weekday}</h3>

    </div>
  )
}
