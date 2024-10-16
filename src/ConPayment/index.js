import React from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import Detailsec from './component/detailsec'
import Return from './component/images/return.png'

export default function Payment() {
  return (
    <div>
      <div className='main'>
        <Navbar />

        <TitleText title="PAYMENT CONFIRMATION" subtitle="Confirm payment for the seat you ordered"/>

        {/* GRID */}
        <div className='payment-grid'>

          {/* FIRST COL */}
          <div className='first-col'>
            <h2 className='heading'>Schedule Details</h2>
            
            <Detailsec detail_title="Movie title" detailname="SPIDERMAN - NO WAY HOME" />
            <hr></hr>

            <Detailsec detail_title="Date" detailname="THURSDAY, DECEMBER 17, 2021" />
            <hr></hr>

            <div className='inner-firstcol'>
              <Detailsec detail_title="Class" detailname="REGULAR 2D" />
              <Detailsec detail_title="Time" detailname="14:40" />
            </div>

            <hr className='hr2'></hr>
            
            <Detailsec detail_title="Tickets" detailname="C8, C9, C10" />
            <hr></hr>
   
            <div className='btn-div'>
              <img src={Return}/><p className='c-grey'>Return</p>
            </div>
    
          </div>


          {/* SECOND COL */}
          <div>
             <div className='rept-div'>
                WRITE FROM HERE
             </div>
          </div>

        </div>

      </div>
    </div>
  )
}
