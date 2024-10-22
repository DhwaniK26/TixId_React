import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'


export default function GridTexts({title, subline, link, mypath}) {

  const navigate = useNavigate()

  return (
    <div>
      <div class="texts">
      <div>
        <p>{title}</p>
        <p>{subline}</p>
      </div>
      <div>
        <p class="lihut" onClick={mypath} >{link}</p>
      </div>
    </div>
    </div>
  )
}
