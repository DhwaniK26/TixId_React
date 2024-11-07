import React, { useState } from 'react'
import '../style.css'

interface CircleType{
  text?:string | JSX.Element,
  bor?:string,
  fontcolor?:string
}

export default function Circlebtn({text,bor,fontcolor} : CircleType) {

  const [select,setselect] = useState(false)
    
  return (
    <div>
      <button className={`circlebtn ${select ? 'selectbtn' : ''}`} style={{border:bor,color:fontcolor}} onClick={()=>setselect(!select)}>{text}</button>
    </div>
  )
}
