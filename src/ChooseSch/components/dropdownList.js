import React from 'react'
import '../style.css'
import Arrowdown from './images/arrowdown.png'

export default function DropdownList({setfalse,notshow,data,title}) {
  return (
    <div className='small-dropList'>

      <div className='dropdown-inner'>
        <p>{title}</p>
        <button className='arrowbtn' onClick={()=>setfalse(!notshow)}>
            <img src={Arrowdown} height={18} width={18}/>
        </button>
      </div>
 
      <ul>
        {data.map((elem)=><li>{elem}</li>)}
      </ul>
    </div>
  )
}
