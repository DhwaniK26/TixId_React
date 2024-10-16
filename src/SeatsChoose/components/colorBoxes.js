import React from 'react'
import '../style.css'

export default function ColorBoxes({bgcolor,border}) {
  return (
        <div className='colorBoxes' style={{"background" : bgcolor, "border": border}}>
            
        </div>
  )
}
