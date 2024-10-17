import React from 'react'
import '../style.css'

export default function SmallBoxes({date, weekday, style, handledatedata}) {
  
  const sendata = ()=>{
    handledatedata(date +" " +weekday)
  }

  return (
    <div className='smallbox' style={style} onClick={sendata}>
      <p>{date}</p>
      <h3>{weekday}</h3>

    </div>
  )
}
