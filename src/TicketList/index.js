import React, { useEffect, useRef } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import { MdOutlineEventNote } from "react-icons/md";
import { useState} from 'react'
import { LuTicket } from "react-icons/lu";

export default function TicketList() {

  const [option, setoption] = useState(null)
  
  const handleclick = (elem)=>{
    setoption(elem)
  }
 
  return (
    <div>
     <div className='main'>
       <Navbar />
     </div>
     <div className='outermost'>
        {/* GRID DIV */}
        <div className='mygrid-div'>
          
          {/* FIRST COL */}
          <div className='grid-firstcol'>

            <div className={`inner-firstcol ${option === 'flag' ? 'active' : ''}`} onClick={()=>handleclick('flag')} >
                <LuTicket />
                <p>ACTIVE TICKET</p>
            </div>
            <hr></hr>

            <div className={`inner-firstcol ${option === 'flag2' ? 'active' : ''}`} onClick={()=>handleclick('flag2')} >
                <MdOutlineEventNote />
                <p>TRANSACTION LIST</p>
            </div>
            <hr></hr>
          </div>
  
          {/* SECOND COL */}
          <div className='grid-secondcol'>
            <div className='inner-secondcol'>
               <h2>My Ticket</h2>
               <p className='c-grey'>List of tickets and transactions you have made</p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  )
}
