import React, { useEffect, useState } from 'react'
import './style.css'
import SmTimeBox from './smTimeBox'


export default function TimeBoxes({screenname,price,num, timearray, handletimePrice}) {
  
  const [display, setDisplay] = useState([]);

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
