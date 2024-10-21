import React, { useState } from 'react'
import '../style.css'

export default function Circlebtn({text,flag}) {

  const [select,setselect] = useState(null)
    
  return (
    <div>
      <button className={`circlebtn ${select === flag  ? 'selectbtn' : ''}`} onClick={()=>setselect(flag)}>{text}</button>
    </div>
  )
}
