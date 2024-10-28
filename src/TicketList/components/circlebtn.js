import React, { useState } from 'react'
import '../style.css'

export default function Circlebtn({text,bor,fontcolor}) {

  const [select,setselect] = useState(false)
    
  return (
    <div>
      <button className={`circlebtn ${select ? 'selectbtn' : ''}`} style={{border:bor,color:fontcolor}} onClick={()=>setselect(!select)}>{text}</button>
    </div>
  )
}
