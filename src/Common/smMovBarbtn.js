import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function SmMovBarbtn({textname,pad,fontsize,mycontent}) {
   
  const navigate = useNavigate()

  return (
    <div>
      <button className='sm-mov-btn' onClick={()=>navigate('/article', { state: { flag: mycontent } })}  style={{padding:pad, fontSize:fontsize}}>Spotlight</button>
    </div>
  )
}
