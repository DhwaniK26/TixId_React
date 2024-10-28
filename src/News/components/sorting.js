import React, { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function Sorting({nosort,setnosort}) {

  const [chk, setchk] = useState(false)
  const [chk1, setchk1] = useState(false)
  const [chk2, setchk2] = useState(false)

  const navigate = useNavigate()

  return (
    <div className='sorting-div'>
      {/* hello  <IoMdArrowDropup /> */}
      <div className='d-flex arrowdiv' onClick={()=>setnosort(!nosort)}>
        <p>Sorting</p> <IoMdArrowDropup />
      </div>
      
      <div className='sort-lst'>
        <div>
          <p className='d-flex' onClick={()=>setchk(!chk)} >Spotlight {chk ? <FaCheck /> : "" }</p>
        </div>
        <div>
          <p className='d-flex' onClick={()=>{setchk1(!chk1); navigate('/article', { state: { flag: 'spider' } })}} >News {chk1  ? <FaCheck /> : "" }</p>
        </div>
        <div>
          <p className='d-flex' onClick={()=>{setchk2(!chk2); navigate('/article', { state: { flag: 'spi-video' } })}} >Videos {chk2 ? <FaCheck /> : "" }</p>
        </div>
   
      </div>

    </div>
  )
}
