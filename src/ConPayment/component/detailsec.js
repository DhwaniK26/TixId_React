import React from 'react'
import '../style.css'

export default function Detailsec({detail_title, detailname}) {
  return (
    <div className='detail-div'>
      <p className='c-grey'>{detail_title}</p>
      <h2>{detailname}</h2>
    </div>
  )
}
