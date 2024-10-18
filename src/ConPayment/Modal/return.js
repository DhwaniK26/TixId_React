import React from 'react'
import './style.css'
import Cross from '../component/images/cross.png'
import Btns from './btns'
import { useNavigate } from 'react-router-dom'

export default function ModalReturn({show,setshow}) {
  const goback = useNavigate()

  return (
    <div className='return-main'>
      
      <div className='utility'>
         <h2>Select Payment</h2>
         <img src={Cross} width={15} height={15} onClick={()=>setshow(!show)}/>
      </div>

      <div className='txt-div c-grey'>
        <p>The seat you previously selected will be cancelled and you will have to re-select.</p>
      </div>

      <div className='mybtn-div'>
        <Btns userclick={()=>goback('/seats')} txt="Return" bgcolor={"white"}  fontcolor={" #1A2C50"}/>
        <Btns userclick={()=>setshow(!show)} txt="Cancel" bgcolor={"#1A2C50"} fontcolor={"#FFBE00"}/>
      </div>

    </div>
  )
}
