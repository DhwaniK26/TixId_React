import React from 'react'
import '../style.css'

export default function Pricebox({title, content, size}) {
  return (
    <div className='price-component'>
      <p className='c-grey'>{title}</p>
      
      <h1 style={{"fontSize":size}}>{content}</h1>
      
    </div>
  )
}
