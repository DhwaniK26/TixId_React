import React from 'react'
import '../style.css'

interface PriceType{
  title:string,
  content:string,
  size:string
}
export default function Pricebox({title, content, size} : PriceType) {
  return (
    <div className='price-component'>
      <p className='cc-grey'>{title}</p>
      
      <h1 style={{"fontSize":size}}>{content}</h1>
      
    </div>
  )
}
