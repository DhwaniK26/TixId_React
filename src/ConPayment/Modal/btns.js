import React from 'react'
import './style.css'

export default function Btns({txt,userclick,bgcolor,fontcolor}) {
  return (
    <div>
      <button className="btns" 
      onClick={userclick}
      style={{background:bgcolor, color:fontcolor}}>{txt}</button>
    </div>
  )
}
