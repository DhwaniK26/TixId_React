import React from 'react'
import './style.css'
import Spider from '../images/halfspider.png'

export default function SpiderCard() {
  return (
    <div className='spider-main'>
       <img src={Spider}/>
       
       <h4>SPIDERMAN : NO WAY HOME</h4>

       <div className='lst'>
        <div>
            <p>Genre</p>
            <p>Durasi</p>
            <p>Sutradara</p>
            <p>Rating Usia</p>
        </div>
        <div>
            <p>Action</p>
            <p>2 jam 28 manit</p>
            <p>Jon watts</p>
            <p>SU</p>
        </div>
       </div>
    </div>
  )
}
