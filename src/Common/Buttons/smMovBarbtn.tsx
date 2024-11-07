import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'

interface SmType{
  textname?: string,
  pad?:string,
  fontsize?:string,
  mycontent?:string
}

export default function SmMovBarbtn({textname,pad,fontsize,mycontent} : SmType) {
   
  const navigate = useNavigate()

  return (
    <div>
      <button className='sm-mov-btn' onClick={()=>navigate('/article', { state: { flag: mycontent } })}  style={{padding:pad, fontSize:fontsize}}>Spotlight</button>
    </div>
  )
}
