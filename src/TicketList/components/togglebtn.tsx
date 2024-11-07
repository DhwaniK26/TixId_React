import React, { useEffect, useState } from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'

interface ToggleType{
  name:string,
  flag:boolean
}

export default function Togglebtn({name,flag} : ToggleType) {

  const [bgcolor, setbgcolor] = useState('blue')
  const navigate = useNavigate()
  
  useEffect(()=>{
    flag ? setbgcolor("blue") : setbgcolor("red")
  },[flag])

  return (
    <div>
      <button className='togglebtn c-lgrey' onClick={()=>navigate('/finalbill')}
     style={{background:bgcolor}} >{name}</button>
    </div>
  )
}
