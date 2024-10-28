import React from 'react'
import'./style.css'
import SmMovBarbtn from './smMovBarbtn'
import { useNavigate } from 'react-router-dom'

export default function SMovBrMovies({movieposter, title,date}) {

  const navigate = useNavigate()

  return (
      <div className='threeBoxdiv'>
         <img src={movieposter} width="100%" height="237px"/>
         <button className='sm-mov-btn' style={{padding:'10px 5px', fontSize:'15px'}} onClick={()=>navigate('/article')}>Spotlight</button>
         <div>
           <h3>{title}</h3>
           <p>{date}</p>
         </div>
        
      </div>
  
  )
}
