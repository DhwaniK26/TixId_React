import React, { useState } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import Detailsec from './component/detailsec'
import Return from './component/images/return.png'
import ReptText from './component/reptText'
import Dana from './component/images/dana.png'
import Footer from '../Common/footer'
import Modal from './Modal/modal'
import PayModal from './Modal/payModal'

export default function Payment() {

  const [showmodal, setshowmodal] = useState(false)


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
            
               <div className='rept-div'>
                  <h2>Order Summary</h2>
  
                  <div className='inner-rept-div'>
  
                     <h4>Transaction Details</h4>
                     <ReptText seattype="REGULAR" price="Rp. 50.000" X="X3"/>
                     <ReptText  seattype="SERVICE FEE" price="Rp.3.000" X="X3"/>
  
                     <hr className='hr3'></hr>
  
                     <h4>Promo & Voucher</h4>
                     <ReptText seattype="PROMO TIX ID" price=" -  Rp. 50.000" />
                     
                     <hr className='hr3'></hr>
     
                     <ReptText fontWeight={600} seattype="Total Payment" price=" -  Rp. 50.000" />
  
                     <hr ></hr>
  
                     <div className='reptText'>
                      <h3>Payment Methods</h3>
                      <h5>See All</h5>
                     </div>
  
                     <div className='mode-select'>
                      <img src={Dana} height={20} width={55}/><span>DANA</span>
                     </div>
                     
                     <p className='warning'>*Ticket purchases cannot be cancelled.</p>
  
                     <button className='sub-btn' onClick={()=>setshowmodal(!showmodal)} >BUY TICKETS</button>
                     {showmodal ? <Modal content={<PayModal />} /> : ""}
                     
                  </div>
               </div>
  
          </div> 

      </div>

      {/* FOOTER */}
      <div style={{height:"4rem"}}></div>
      <Footer/>
    </div>
  )
}
