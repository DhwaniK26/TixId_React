import React, { useEffect, useState } from 'react'
import './style.css'
import SmTimeBox from './smTimeBox'

interface TimeType{
  screenname: string,
  price:string,
  num:number,
  timearray:string[],
  handletimePrice: (data: {})=>void
}

export default function TimeBoxes({screenname,price,num, timearray, handletimePrice} : TimeType) {
  
  const [display, setDisplay] = useState<any | null>([]);

  const h = () => {
    const boxes = []; // Initialize an empty array to store SmTimeBox components
    for (let i = 0; i < num; i++) { // Use < instead of <= to avoid creating one extra bo
      const time = timearray[i] || ''; 
      boxes.push(<SmTimeBox key={i} time={time} handletimePrice={handletimePrice} price={price} screenname={screenname}/>); // Push each SmTimeBox component into the array
    }
    setDisplay(boxes); // Set the array to the display state
  };

  useEffect(() => {
    h();
  }, [num]); 

  //----------------------------------------

  return (
    <div className='show-main'>

        <div className='shows'>
          <h3 className='c-grey'>{screenname}</h3>
          <p className='c-grey'>{price}</p>
        </div>

        <div className='time-division'>
          {display}

        </div>
      
    </div>
  )
}
