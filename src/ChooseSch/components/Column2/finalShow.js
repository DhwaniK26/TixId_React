import React from 'react'
import './style.css'

export default function FinalShow({nextpage}) {
  return (
    <div className='final-card'>
      <h2>GRAND INDONESIA CGV</h2>
      
      <p className='p c-grey'>Kamis, 16 Desember 2021</p>

      <div className='time'>
        <h3>REGULAR 2D </h3>
        <h3>14.40</h3>
      </div>

      <p className='c-grey small-text'>* Seat selection can be done after this</p>

      <button onClick={nextpage} className='mybutton'>BUY NOW</button>
    </div>
  )
}
