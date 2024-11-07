import React from 'react'
import '../style.css'

interface ColorType{
  bgcolor: string,
  border: string
}

export default function ColorBoxes({bgcolor,border} : ColorType) {
  return (
        <div className='colorBoxes' style={{"background" : bgcolor, "border": border}}>
            
        </div>
  )
}
