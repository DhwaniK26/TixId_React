import React from 'react'
import './style.css'

export default function TitleText({title, subtitle}) {
  return (
    <div className='tt'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
