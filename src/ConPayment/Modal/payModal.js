import React from 'react'
import Cross from '../component/images/cross.png'

export default function PayModal() {
  return (
    <div className='pay-div'>
      <div className='utility'>
         <h2>Select Payment</h2>
         <img src={Cross} width={15} height={15}/>
      </div>
      

    </div>
  )
}
