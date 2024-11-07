import React, { useEffect, useState } from 'react'
import './style.css'
import SmTimeBox from './smTimeBox'
import Theatre from './theatre'
import SmallButtons from '../../../Common/Buttons/smallButtons'

interface TimeType{
  screenname: string,
  price:number,
  num:number,
  timearray:string[],
  theatrename:string
  // handletimePrice: (data: {})=>void
}

export default function TimeBoxes({screenname,price,num, timearray,theatrename} : TimeType) {
  
  const [display, setDisplay] = useState<any | null>([]);

  const h = () => {
    const boxes = []; // Initialize an empty array to store SmTimeBox components
    for (let i = 0; i < num; i++) { // Use < instead of <= to avoid creating one extra bo
      const time = timearray[i] || ''; 
      boxes.push(<SmTimeBox key={i} time={time} price={price} screenname={screenname} theatrename={theatrename}/>); // Push each SmTimeBox component into the array
    }
    setDisplay(boxes); // Set the array to the display state
  };

  useEffect(() => {
    h();
  }, [num]); 

  //----------------------------------------

  return (
    <div>
    <div className='show-main'>

        <div className='shows'>
          <h3 className='c-grey'>{screenname}</h3>
          <p className='c-grey'>Rs. {price}</p>
        </div>

        <div className='time-division'>
          {display}

        </div>
      
    </div>
    </div>
  )
}
