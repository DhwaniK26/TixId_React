import React, { useState,useEffect, useRef } from 'react'
import Arrowdown from './images/arrowdown.png'
import DropdownList from './dropdownList'

interface DropType{
  data: string[],
  title:string
}
export default function Dropdowns({data, title} : DropType) {

  const [show, setshow] = useState(false)
  
  
  return (
    <div>
        <div className='small-drop' >

          <h2 className='sort-name' onClick={()=>setshow(!show)}>{title}</h2>
           
          <button className='arrowbtn2' >
              <img src={Arrowdown}  height={18} width={18}/>
          </button>

          <div className='inner-div'>
              {show ? <DropdownList notshow={show} setfalse={setshow} data={data} title={title} />: " "}
          </div>
        </div>
    </div>
  )
}
