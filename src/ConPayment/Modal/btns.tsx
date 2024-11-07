import React from 'react'
import './style.css'

interface BtnsType{
  txt:string,
  userclick: ()=>void,
  bgcolor:string,
  fontcolor:string
}

export default function Btns({txt,userclick,bgcolor,fontcolor} : BtnsType) {
  return (
    <div>
      <button className="btns" 
      onClick={userclick}
      style={{background:bgcolor, color:fontcolor}}>{txt}</button>
    </div>
  )
}
