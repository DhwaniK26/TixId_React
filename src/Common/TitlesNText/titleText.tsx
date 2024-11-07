import React from 'react'
import '../style.css'

interface TitleType{
  title: string,
  subtitle: string
}

export default function TitleText({title, subtitle} : TitleType) {
  return (
    <div className='tt'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
