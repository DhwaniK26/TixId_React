import React from 'react'
import '../style.css'

export default function Pricebox({title, content, size}) {
  return (
    <div className='price-component'>
      <p className='cc-grey'>{title}</p>
      
      <h1 style={{"fontSize":size}}>{content}</h1>
      
    </div>
  )
}
