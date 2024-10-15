import React from 'react'
import './style.css'

export default function SmTimeBox({time,bgcolor,color,border}) {
  return (
    <div className='sm-timediv' style={{"background":bgcolor, "color":color,"border":border}}>
      {time}
    </div>
  )
}
