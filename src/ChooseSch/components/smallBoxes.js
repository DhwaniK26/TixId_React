import React from 'react'
import '../style.css'

export default function SmallBoxes({date, weekday, style}) {
  return (
    <div className='smallbox' style={style}>
      <p>{date}</p>
      <h3>{weekday}</h3>

    </div>
  )
}
