import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'

interface GridType{
  title:string,
  subline : string,
  link: string,
  mypath:()=>void
}


export default function GridTexts({title, subline, link, mypath} : GridType) {

  const navigate = useNavigate()

  return (
    <div>
      <div className="mygrid-texts">
      <div>
        <p>{title}</p>
        <p>{subline}</p>
      </div>
      <div>
        <p className="lihut" onClick={mypath} >{link}</p>
      </div>
    </div>
    </div>
  )
}
