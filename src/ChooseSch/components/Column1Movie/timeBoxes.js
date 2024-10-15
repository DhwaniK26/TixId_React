import React, { useEffect, useState } from 'react'
import './style.css'
import SmTimeBox from './smTimeBox'


export default function TimeBoxes({screenname,price,num}) {
  
  const [display, setDisplay] = useState([]);

  const h = () => {
    const boxes = []; // Initialize an empty array to store SmTimeBox components
    for (let i = 0; i < num; i++) { // Use < instead of <= to avoid creating one extra box
      boxes.push(<SmTimeBox key={i} time="2.00" />); // Push each SmTimeBox component into the array
    }
    setDisplay(boxes); // Set the array to the display state
  };

  useEffect(() => {
    h();
  }, [num]); 

  return (
    <div className='show-main'>

        <div className='shows'>
          <h3 className='c-grey'>{screenname}</h3>
          <p className='c-grey'>{price}</p>
        </div>

        <div className='time-div'>
          {display}

        </div>
      
    </div>
  )
}
