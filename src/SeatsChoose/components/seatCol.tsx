import React, { useState, useEffect } from 'react'
import '../style.css'
import SeatBoxes from './seatBoxes'

interface SeatType{
  start: number,
  end:number,
  handlechair: (data : string)=> void
}

 export default function SeatCol({start,end, handlechair} : SeatType) {

  const rows = ['A', 'B', 'C', 'D' ,'E','F','G','H'];
  
  return (
    <div className='inner-seats-div'>
     {rows.map((row) => (
        <div key={row} style={{ display: 'flex', }}>
          {Array.from({ length: end - start + 1 }, (_, index) => (
            <SeatBoxes
              key={row + (start + index)}
              number={`${row}${start + index}`}
              bgcolor="lightgray" // default background color
              selected={false}
              handlechair = {handlechair}
              // remchair={remchair}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
