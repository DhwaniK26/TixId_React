import React from 'react'
import './style.css'
import SmallButtons from '../../../Common/Buttons/smallButtons'
import Star from '../images/star.png'

interface TheatType{
  name: string,
  button: JSX.Element
}


export default function Theatre({name,button} : TheatType) {
  return (
    <div>

      <div className='main-div'>
  
        <div className='star-div'>
          <img src={Star} height={32} width={32}></img>
          <p>{name}</p>
        </div>
        
        <div className='btn-div '>
          {button}
        </div>
        
      </div>

      <p className='c-grey'>JL. MH. TAHMRIN NO.1</p>
    </div>
  )
}
