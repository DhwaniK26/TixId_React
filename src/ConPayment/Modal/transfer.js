import React, { useState,useRef, useEffect} from 'react'
import './style.css'

export default function Transfer({logo,bankname,tick,h,w, styles}) {

  const [check,setcheck] = useState(false)
  const trans = useRef()

  const checkbtn = () => {
    setcheck((prevCheck) => !prevCheck); 
  };

  // Apply background based on check value
  useEffect(() => {

    check ? trans.current.style.background = "#c9cbcf" : trans.current.style.background = "white"

  }, [check]);

  return (
    <div className='full-trans' ref={trans} style={styles}>
      <div  className='trans-div' onClick={checkbtn}>
        <img src={logo} height={h} width={w}/>
        <div>{bankname}</div>
        <div >
          {check ? <img src={tick}/> : ""}
        </div>
      </div>
    </div>

  )
}
