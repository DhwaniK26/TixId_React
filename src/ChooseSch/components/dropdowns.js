import React, { useState } from 'react'
import Arrowdown from './images/arrowdown.png'
import DropdownList from './dropdownList'

export default function Dropdowns({data, title}) {

  const [show, setshow] = useState(false)
  
  let style;
  if(show){
    style = "showAbove";
  }
  return (
    <div>
        <div className='small-drop'>
          <h2>{title}</h2>
           
          <button className='arrowbtn2' onClick={()=>setshow(!show)}>
              <img src={Arrowdown}  height={15} width={15}/>
          </button>
  
          <div className='inner-div'>
              {show ? <DropdownList notshow={show} setfalse={setshow} data={data} title={title} />: " "}
          </div>
        </div>
    </div>
  )
}
