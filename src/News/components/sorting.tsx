import React, { useState, useRef, useEffect } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface SortType{
  nosort:boolean,
  setnosort:(value : boolean) => void
}

export default function Sorting({nosort,setnosort} : SortType) {

  const dropdownRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleClickOutside = (event : any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setnosort(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [chk, setchk] = useState(false)
  const [chk1, setchk1] = useState(false)
  const [chk2, setchk2] = useState(false)

  const navigate = useNavigate()

  return (
    <div>


       <div className='sorting-div' ref={dropdownRef}>
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
      
    </div>
  )
}
