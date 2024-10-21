import React, { useState } from 'react'
import '../style.css'
import Loc from './images/loc.png'
import Togglebtn from './togglebtn'

export default function MovTicketlst({photu ,moviename, date, theatre, screen ,done}) {

  return (
    <div className='movlst-outer'>
    <div className='movlst-div'>
      <div className='photo-div'>
        <img src= {photu}/>
      </div>

      <div className='info-div'>

       <div>
         <h2 className='w-500'>{moviename}</h2>
         <p className='c-grey'>{date}</p>
         <div className='locsign-div'>
            <img src={Loc} height={32} width={32}/>
            <p className='c-grey'>{theatre} <span>{screen}</span></p>
         </div>
       </div>

       <div>
         <Togglebtn name={done ? 'success' : 'fail'}  bgcolor={"#118EEA"} flag={done}/>
       </div>

      </div>
    </div>
    <br></br>
     <hr className='linehr2'></hr>
   </div>
  )
}
