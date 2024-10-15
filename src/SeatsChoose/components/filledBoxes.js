import React from 'react'
import '../style.css'

export default function FilledBoxes({bgcolor,border}) {
  return (
        <div className='colorBoxes' style={{"background" : bgcolor, "border": border}}>
            
        </div>
  )
}
