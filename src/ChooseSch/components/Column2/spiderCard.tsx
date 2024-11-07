import React from 'react'
import './style.css'
import Spider from '../images/halfspider.png'
import { useSelector } from 'react-redux'

export default function SpiderCard() {

  const showmovie = useSelector((state : any)=>state.home.selectedMovie)

  return (
    <div className='spider-main'>
       <img src={showmovie.poster}/>
       
       <h4>{showmovie.name}</h4>

       <div className='lst'>
        <div>
            <p>Genre</p>
            <p>Duration</p>
            <p>Director</p>
            <p>Age Rating</p>
        </div>
        <div>
            <p>Action</p>
            <p>2 hours 28 minutes</p>
            <p>Jon watts</p>
            <p>SU</p>
        </div>
       </div>
    </div>
  )
}
